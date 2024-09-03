import Link from "next/link";

export default async function AddTask() {
  // Needs to navigate to another route.

  return (
    <div className="h-[40px] rounded-xl flex justify-center items-center border-2 border-solid border-slate-800 bg-green-500 hover:bg-green-700">
      <Link
        href="/tasks/create"
        className=""
      >
        <span>Create Task</span>
      </Link>
    </div>
  );
};
