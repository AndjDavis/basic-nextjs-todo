import { notFound } from "next/navigation";

import EditTaskForm from "@/app/ui/tasks/edit-task-form";
import { fetcher } from "@/app/lib/data";
import { ITask } from "@/app/lib/definitions";


export default async function Page({
  params,
}: {
  params: {
    id: string,
  },
}) {
  const task: ITask = await fetcher.getById(params.id);
  if (!task) notFound();

  return (
    <main className="h-full w-full mt-4 flex flex-col items-center gap-2 md:mt-8">
      <h2 className="flex justify-center items-center h-1/6 font-bold text-2xl md:text-2xl">
        Edit Task
      </h2>
      <EditTaskForm task={task} />
    </main>
  );
};
