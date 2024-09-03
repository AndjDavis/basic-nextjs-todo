import { ITask } from "@/app/lib/definitions";


export const fetchAllTasks = async function (): Promise<ITask[]> {
  try {
    const results = await fetch(
      `${process.env.BASE_URL}/tasks`,
      { cache: "no-store" },
    );
  
    const tasks: ITask[] = await results.json();
    return tasks;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch task data.")
  }
};
