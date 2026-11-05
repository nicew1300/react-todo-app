import "./App.css";
import { Header, TodoItem } from "./Components";
import "./Header.css";
import "./Todo.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="todo-container">
        <TodoItem
          title="Item 1"
          shortdesc="This is a test to see what would happen if the description was longer than the title. It should wrap to the next line and not break the layout."
        />
        <TodoItem title="Item 2" shortdesc="Another short description" />
        <TodoItem title="Item 3" shortdesc="Yoo another short description" />
      </div>
    </div>
  );
}

export default App;
