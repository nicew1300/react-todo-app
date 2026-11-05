function Header() {
  return (
    <div className="header">
      <div className="new-task-btn">+</div>
      <div className="task-counter">Remaining Tasks: 4</div>
    </div>
  );
}

function TodoItem({ title, shortdesc }) {
  return (
    <div className="todo-item">
      <div className="todo-info">
        <div className="todo-title">{title}</div>
        <div className="todo-shortdesc">{shortdesc}</div>
      </div>
      <div className="todo-btn">Completed</div>
    </div>
  );
}

export { Header, TodoItem };
