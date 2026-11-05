import "./App.css";
import { Header, TodoItem } from "./Components";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="todo-container">
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
