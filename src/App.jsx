import "./App.css";
import { Header, TodoItem } from "./Components";
import "./Header.css";
import "./Todo.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="todo-container">
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
