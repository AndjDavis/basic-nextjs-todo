export interface ITask {
  id: string;
  body: string;
  title: string;
  completed: boolean;
};

export interface ICardProps {
  task: ITask;
  key: React.Key;
};

export type State = {
  errors?: {
    title?: string[];
    body?: string[];
  };
  message?: string | null;
};

export type JsonHeader = {
  "Content-Type": "application/json";
};
