"use client";

import { useActionState } from "react";

import { Button, LinkButton } from "@/app/ui/button";
import { FormError } from "@/app/ui/form-error";
import { createTask, editTask } from "@/app/lib/actions";
import { ITask, State } from "@/app/lib/definitions";
import { titleError, bodyError } from "@/app/lib/constants";


export default function TaskForm({ task }: { task?: ITask }) {
  let action = createTask;
  let submitText = "Create";
  if (task?.id) {
    action = editTask.bind(null, task.id);
    submitText = "Save Changes";
  }

  const initialState: State = {
    message: null,
    errors: {},
  };
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} className="grow flex flex-col justify-evenly">
      <div className="rounded-md bg-gray-50 p-4">
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
                defaultValue={task?.title || ""}
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
                defaultValue={task?.body || ""}
                type="text"
                aria-describedby={bodyError}
              />
            </div>
          </div>
        </div>
        <FormError state={state} errorType={bodyError} />
      </div>
      <div className="flex justify-center gap-6">
        <LinkButton
          href="/"
          className="h-10 rounded-lg bg-gray-100 px-4 text-sm text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </LinkButton>
        <Button type="submit">{submitText}</Button>
      </div>
    </form>
  );
};
