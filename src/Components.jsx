function Header() {
  return (
    <div className="header">
      <div className="new-task-btn">+</div>
      <div className="task-counter">Remaining Tasks: 4</div>
    </div>
  );
}

function TodoItem() {
  return (
    <div className="todo-item">
      <div className="todo-info">
        <div className="todo-title">Item 1</div>
        <div className="todo-shortdesc">A short description</div>
      </div>
      <div className="todo-btn">Completed</div>
    </div>
  );
}

export { Header, TodoItem };
