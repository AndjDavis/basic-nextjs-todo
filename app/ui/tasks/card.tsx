import { EditTaskButton, DeleteTaskButton } from "@/app/ui/tasks/buttons";
import { ICardProps, ITask } from "@/app/lib/definitions";


export const Card: React.FC<ICardProps> = ({ task }: { task: ITask }) => {
  const { body, id, title } = task;
  return (
    <div className="flex rounded-xl bg-gray-50 shadow-sm my-1 p-2 h-full gap-5">
      <div className="flex flex-col place-content-evenly">
        <EditTaskButton id={id} />
        <DeleteTaskButton id={id} />
      </div>
      <div className="flex flex-col p-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <span>
          {body}
        </span>
      </div>
    </div>
  );
};
