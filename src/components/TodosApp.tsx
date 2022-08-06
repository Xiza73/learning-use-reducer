import { useReducer } from "react";
import { AddTodo, RemoveTodo, ToggleTodo } from "../actions/TodoActions";
import TodoReducer from "../reducers/TodoReducer";
import { getTodosLength } from "../selectors/TodoSelectors";
import { initialState } from "../utils/fixtures/todos";
import { Todo } from "../utils/types";
import { CreateTodo } from "./CreateTodo";
import { TodosList } from "./TodosList";

export const TodosApp = () => {
  // const [todos, setTodos] = useState(initialState());
  const [state, dispatch] = useReducer(TodoReducer, initialState());

  const addTodo = (todo: Todo) => {
    todo.id = Date.now();
    todo.toggled = false;

    // setTodos([todo, ...todos]);
    dispatch(AddTodo(todo));
  };

  const toggleTodo = (todo: Todo) => {
    // setTodos(todos.map((todo) => {
    //   if (todo.id === id) {
    //     return { ...todo, toggled: !todo.toggled };
    //   }
    //   return todo;
    // }));
    dispatch(ToggleTodo(todo));
  };

  const removeTodo = (todo: Todo) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch(RemoveTodo(todo));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
        <CreateTodo onSubmit={addTodo} />
        {getTodosLength(state) > 0 ? (
          <>
            <p className="text-center text-gray-500 mb-4">
              There are {getTodosLength(state)} todos
            </p>
            <TodosList
              todos={state.todos}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          </>
        ) : (
          <p className="text-center text-gray-500">No todos yet</p>
        )}
      </div>
    </div>
  );
};
