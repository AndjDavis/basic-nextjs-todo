import TaskList from "@/app/ui/tasks/task-list";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-gray-50 rounded-lg w-1/4 h-2/4 text-center">
          <TaskList />
      </div>
    </main>
  );
};
