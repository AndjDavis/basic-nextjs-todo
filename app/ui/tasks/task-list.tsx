import AddTask from "@/app/ui/tasks/add-task";
import Button from "@/app/ui/button"
import { Card } from "@/app/ui/card";
import { fetchAllTasks } from "@/app/lib/data";
import { ITask } from "@/app/lib/definitions";

export default async function TaskList() {
  const tasks: ITask[] = await fetchAllTasks();

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
