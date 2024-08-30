import TaskList from "@/app/ui/tasks/task-list";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-1/4 text-center">
        <div className="flex flex-col items-center justify-between">
          <TaskList />
        </div>
      </div>
    </main>
  );
};
