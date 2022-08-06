import { AddTodo, RemoveTodo, ToggleTodo } from "./actions";
import { TodoAction, TodoState } from "../../utils/types";

export default (state: TodoState, action: TodoAction) => {
  switch (action?.type) {
    case AddTodo().type:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ToggleTodo().type:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload?.id) {
            return { ...todo, toggled: !todo.toggled };
          }
          return todo;
        }),
      };
    case RemoveTodo().type:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload?.id),
      };
    default:
      return state;
  }
};
