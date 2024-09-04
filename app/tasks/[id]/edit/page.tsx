import { notFound } from "next/navigation";

import TitleCard from "@/app/ui/title-card";
import TaskForm from "@/app/ui/tasks/form";
import { fetcher } from "@/app/lib/data";
import { ITask } from "@/app/lib/definitions";


export default async function Page(
  {
    params,
  }: {
    params: {
      id: string,
    },
  }
) {
  const task: ITask = await fetcher.getById(params.id);
  if (!task) notFound();

  return (
    <main className="h-full w-full">
      <div className="flex flex-col w-full h-full">
        <TitleCard title="Edit Task" />
        <TaskForm task={task} />
      </div>
    </main>
  );
};
