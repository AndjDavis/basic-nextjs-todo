import Link from "next/link";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";


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

// TODO: Add functionality.
export function DeleteTaskButton({ id }: { id: string }) {
  return (
    <Link
      href={`/tasks/${id}/delete`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <TrashIcon className="w-5" />
    </Link>
  );
};
