import "./App.scss";
import { TodosApp } from "./components/TodosApp";
import { TodoProvider } from "./apps/Todo/context";

export default function App() {
  return (
    <TodoProvider>
      <TodosApp />
    </TodoProvider>
  );
}
