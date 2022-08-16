import { Todo } from "../utils/types";
import TodoCard from "./TodoCard";
import { useTodoContext } from "../apps/Todo/context";
import { getTodosLength } from "../apps/Todo/selectors";
import { memo, useEffect } from "react";

export const TodosList = () => {
  const { todos } = useTodoContext();
  const todosLength = getTodosLength(todos);

  useEffect(() => {
    console.log("List rendered");
  });

  return (
    <>
      <p className="text-center text-gray-500 mb-4">
        {todosLength ? `There are ${todosLength} todos` : "No todos yet"}
      </p>
      <ul className="w-full max-w-md">
        {todos.map((todo: Todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default memo(TodosList);
