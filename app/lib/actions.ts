"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from "zod";

import { State } from "@/app/lib/definitions";
import { fetcher } from "@/app/lib/data";


const FormSchema = z.object({
  id: z.string(),
  body: z.string({
    invalid_type_error: "Please provide a valid description.",
  }).min(1, "A task description is required.").trim(),
  title: z.string({
    invalid_type_error: "Please provide a valid title."
  }).min(1, "A task title is required.").trim(),
  completed: z.boolean(),
});


const CreateTaskSchema = FormSchema.omit({ id: true, completed: true });


export async function createTask(
  prevState: State, 
  formData: FormData
) {
  const validatedFields = CreateTaskSchema.safeParse({
    body: formData.get("body"),
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create new task."
    };
  }

  try {
    await fetcher.post(
      validatedFields.data
    );
  } catch (error) {
    console.error("Database Error: Failed to create new task", error);
    return {
      message: "Database Error: Failed to create new task.",
    };
  };

  revalidatePath("/");
  redirect("/");
};
