export interface ITask {
  id: string;
  body: string;
  title: string;
  completed: boolean;
};

export type State = {
  errors?: {
    title?: string[];
    body?: string[];
  };
  message?: string | null;
};
