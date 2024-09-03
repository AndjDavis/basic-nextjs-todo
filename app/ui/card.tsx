import { ITask } from "@/app/lib/definitions";

interface ICardProps {
  task: ITask;
  key: React.Key;
}

export const Card: React.FC<ICardProps> = ({ task }) => {
  const { body, title } = task;
  return (
    <div className="flex flex-col rounded-xl bg-gray-50 shadow-sm my-1 p-2 h-full">
      <div className="p-1">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="px-4 text-wrap font-medium">
        {body}
      </p>
    </div>
  );
};
