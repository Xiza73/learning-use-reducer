import CreateTodo from "./CreateTodo";
import { TodosList } from "./TodosList";
import { useEffect } from "react";
import { TodoProvider } from "../apps/Todo/context";

export const TodosApp = () => {
  useEffect(() => {
    console.log("App rendered");
  });

  return (
    <TodoProvider>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
          <CreateTodo />
          <TodosList />
        </div>
      </div>
    </TodoProvider>
  );
};
