import "./App.css";
import { TodoItem } from "./Components";

function App() {
  return (
    <div className="container">
      <div>Task Creation Header</div>
      <div className="todo-container">
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
