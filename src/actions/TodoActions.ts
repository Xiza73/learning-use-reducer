import { todoActions } from "../utils/constants";
import { Todo, TodoAction } from "../utils/types/index";

export const AddTodo = (payload?: Todo): TodoAction => ({
  type: todoActions.ADD_TODO,
  payload: payload!,
});

export const ToggleTodo = (payload?: Todo): TodoAction => ({
  type: todoActions.TOGGLE_TODO,
  payload: payload!,
});

export const RemoveTodo = (payload?: Todo): TodoAction => ({
  type: todoActions.REMOVE_TODO,
  payload: payload!,
});
