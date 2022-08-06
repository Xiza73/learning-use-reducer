import { Todo } from "../utils/types";
import { TodoCard } from "./TodoCard";

type Props = {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onRemove: (todo: Todo) => void;
};

export const TodosList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo: Todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
