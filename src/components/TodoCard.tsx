import { useTodoContext } from "../apps/Todo/context";
import { Todo } from "../utils/types";

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <li
      key={todo.id}
      className="flex items-center justify-between mb-4 border-b border-gray-400"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.toggled}
          onChange={() => toggleTodo(todo)}
        />
        <span className="ml-2">{todo.title}</span>
      </div>
      <div className="text-right">{todo.description}</div>
      <button className="text-red-500" onClick={() => removeTodo(todo)}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
};

export default TodoCard;
