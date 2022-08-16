import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { AddTodo, RemoveTodo, ToggleTodo } from "./actions";
import TodoReducer from "./reducer";
import { initialState } from "../../utils/fixtures/todos";
import { Todo } from "../../utils/types";

type Props = {
  children: ReactNode;
};

type ContextProps = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
};

const initialContext: ContextProps = {
  ...initialState(),
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
};

export const TodoContext = createContext<ContextProps>(initialContext);

export const useTodoContext = (): ContextProps => useContext(TodoContext);

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState());

  const addTodo = useCallback(
    (todo: Todo) => {
      todo.id = Date.now();
      todo.toggled = false;
      dispatch(AddTodo(todo));
    },
    [dispatch]
  );

  const toggleTodo = useCallback(
    (todo: Todo) => {
      dispatch(ToggleTodo(todo));
    },
    [dispatch]
  );

  const removeTodo = useCallback(
    (todo: Todo) => {
      dispatch(RemoveTodo(todo));
    },
    [dispatch]
  );

  return (
    <TodoContext.Provider value={{ ...state, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
