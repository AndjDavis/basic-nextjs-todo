
import TaskForm from "@/app/ui/tasks/form";
import TitleCard from "@/app/ui/title-card";

export default function Page() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col w-full h-full">
        <TitleCard title="Create a new Task" />
        <TaskForm />
      </div>
    </main>
  );
};
