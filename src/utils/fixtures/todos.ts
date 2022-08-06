import { Todo } from "../types";

export const initialState = (): { todos: Todo[] } => {
  return {
    todos: [
      {
        id: 1,
        title: "Learn React",
        description: "The best way to learn React",
        toggled: false,
      },
      {
        id: 2,
        title: "Learn TypeScript",
        description: "The best way to learn TypeScript",
        toggled: true,
      },
    ],
  };
};
