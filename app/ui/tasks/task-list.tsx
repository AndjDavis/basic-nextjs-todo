import TitleCard from "@/app/ui/title-card";
import { Card } from "@/app/ui/tasks/card";
import { LinkButton } from "@/app/ui/button";
import { ITask } from "@/app/lib/definitions";
import { fetcher } from "@/app/lib/data";

export default async function TaskList() {
  const tasks: ITask[] = await fetcher.get();

  return (
    <div className="flex flex-col w-full h-full">
      <TitleCard title="Tasks List" />
      <div className="flex flex-col overflow-x-auto">
        {tasks.map((task) => <Card key={task.id} task={task} />)}
      </div>
      <LinkButton
        href="/tasks/create"
        className="min-h-12 justify-center text-white border-t-2 bg-green-400 hover:bg-green-500 focus-visible:outline-green-600 active:bg-green-600"
      >
        <span>Create Task</span>
      </LinkButton>
    </div>
  );
};
