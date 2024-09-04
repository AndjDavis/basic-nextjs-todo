import AddTask from "@/app/ui/tasks/add-task";
import { Card } from "@/app/ui/tasks/card";
import { ITask } from "@/app/lib/definitions";
import { fetcher } from "@/app/lib/data";

export default async function TaskList() {
  const tasks: ITask[] = await fetcher.get();

  return (
    <div className="flex flex-col justify-start w-full h-full rounded-xl">
      <h2 className="flex flex-col justify-center h-1/6 font-bold text-2xl md:text-2xl">
        Task List
      </h2>
      <div className="flex flex-col h-5/6 overflow-x-auto">
        {tasks.map((task) => <Card key={task.id} task={task} />)}
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
};
