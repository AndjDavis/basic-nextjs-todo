"use client";

import { useActionState } from "react";
import Link from "next/link";

import Button from "@/app/ui/button";
import { FormError } from "@/app/ui/form-error";
import { editTask } from "@/app/lib/actions";
import { ITask, State } from "@/app/lib/definitions";
import { titleError, bodyError } from "@/app/lib/constants";


export default function EditTaskForm(
  {
    task
  }: {
    task: ITask
  }
) {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const editTaskWithId = editTask.bind(null, task.id);
  const [state, formAction] = useActionState(editTaskWithId, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="title"
          >
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="title"
                name="title"
                placeholder="Task Title"
                defaultValue={task.title}
                type="text"
                aria-describedby={titleError}
              />
            </div>
          </div>
          <FormError state={state} errorType={titleError} />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium"
            htmlFor="body"
          >
            Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="body"
                name="body"
                placeholder="Task Description"
                defaultValue={task.body}
                type="text"
                aria-describedby={bodyError}
              />
            </div>
          </div>
        </div>
        <FormError state={state} errorType={bodyError} />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
};
