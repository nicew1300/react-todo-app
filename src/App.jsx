import "./App.css";
import { Header, TodoItem } from "./Components";
import "./Header.css";
import "./Todo.css";

function App() {
  function counter() {
    // the task counter only works when the entire app is rerendered when i change something in the code. after a refresh, it doesnt and displays 0.
    // i will try and fix it later
    const incompletedTasks = document.querySelectorAll(
      ".todo-not-completed",
    ).length;

    return incompletedTasks;
  }

  return (
    <div className="container">
      <Header taskCount={counter()} />
      <div className="todo-container">
        <TodoItem
          title="Item 1"
          shortdesc="This is a test to see what would happen if the description was longer than the title. It should wrap to the next line and not break the layout."
          completed={false}
        />
        <TodoItem
          title="Item 2"
          shortdesc="Another short description"
          completed={true}
        />
        <TodoItem
          title="Item 3"
          shortdesc="Yoo another short description"
          completed={false}
        />
        <TodoItem
          title="Item 3"
          shortdesc="Yoo another short description"
          completed={false}
        />
      </div>
    </div>
  );
}

export default App;
