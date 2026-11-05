import "./App.css";
import { Header, TodoItem } from "./Components";
import "./Header.css";
import "./Todo.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="todo-container">
        <TodoItem title="Item 1" shortdesc="A short description" />
        <TodoItem title="Item 2" shortdesc="Another short description" />
      </div>
    </div>
  );
}

export default App;
