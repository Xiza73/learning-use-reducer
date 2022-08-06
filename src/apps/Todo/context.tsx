import { createContext, ReactNode, useContext, useReducer } from "react";
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
  todos: initialState().todos,
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
};

export const TodoContext = createContext<ContextProps>(initialContext);

export const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState());

  const addTodo = (todo: Todo) => {
    todo.id = Date.now();
    todo.toggled = false;
    dispatch(AddTodo(todo));
  };

  const toggleTodo = (todo: Todo) => {
    dispatch(ToggleTodo(todo));
  };

  const removeTodo = (todo: Todo) => {
    dispatch(RemoveTodo(todo));
  };

  return (
    <TodoContext.Provider value={{ ...state, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
