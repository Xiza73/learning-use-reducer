import CreateTodo from "./CreateTodo";
import { TodosList } from "./TodosList";

export const TodosApp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
        <CreateTodo />
        <TodosList />
      </div>
    </div>
  );
};
