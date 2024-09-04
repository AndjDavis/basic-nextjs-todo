import AddTaskForm from "@/app/ui/tasks/add-task-form";

export default function Page() {
  return (
    <main>
      <div className="h-full w-full mt-4 flex flex-col items-center gap-2 md:mt-8">
        <h2 className="flex justify-center items-center h-1/6 font-bold text-2xl md:text-2xl">
          Create a new Task
        </h2>
        <AddTaskForm />
      </div>
    </main>
  );
};
