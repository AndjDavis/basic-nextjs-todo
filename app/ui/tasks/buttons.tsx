import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { deleteTask } from "@/app/lib/actions";


export function EditTaskButton ({ id }: { id: string }) {
  return (
    <Link
      href={`/tasks/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
};


export async function DeleteTaskButton({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);

  return (
    <form action={deleteTaskWithId}>
      <button className="rounded border p-2 hover:bg-gray-100">
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
};
