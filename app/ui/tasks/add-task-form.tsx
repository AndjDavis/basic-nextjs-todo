"use client";

import { useActionState } from "react";
import { createTask } from "@/app/lib/actions";
import { State } from "@/app/lib/definitions";

export async function AddTaskForm() {
  const initialState: State = {
    message: null,
    errors: {},
  };

  const [state, formAction] = useActionState(createTask, initialState);
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
                placeholder="Task Title"
                type="text"
                name="title"
              />
            </div>
          </div>
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
                placeholder="Task Description"
                type="text"
                name="body"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}