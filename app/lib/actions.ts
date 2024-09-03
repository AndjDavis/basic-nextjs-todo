"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z }from "zod";

import { State } from "@/app/lib/definitions";


const FormSchema = z.object({
  id: z.string(),
  body: z.string({
    invalid_type_error: "Please add a description",
  }),
  title: z.string({
    invalid_type_error: "Please add a title"
  }),
});


const CreateTaskSchema = FormSchema.omit({ id: true });


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
    await fetch(
      `${process.env.BASE_URL}/tasks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data)
      }
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
