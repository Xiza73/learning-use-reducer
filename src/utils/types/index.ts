export type Todo = {
  id?: number;
  title: string;
  description: string;
  toggled?: boolean;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoAction = {
  type: string;
  payload: Todo;
};
