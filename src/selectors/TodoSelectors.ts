import { TodoState } from "../utils/types";

export const getTodosLength = (state: TodoState) => state.todos.length;
