function Header({ taskCount }) {
  return (
    <div className="header">
      <div className="new-task-btn">+</div>
      <div className="task-counter">
        <b>{taskCount}</b> Tasks left
      </div>
    </div>
  );
}

function TodoItem({ title, shortdesc, completed }) {
  return (
    <div className="todo-item">
      <div className="todo-info">
        <div className="todo-title">{title}</div>
        <div className="todo-shortdesc">
          {!shortdesc ? "No description" : shortdesc}
        </div>
      </div>
      <div
        className={`todo-btn ${completed ? "todo-completed" : "todo-not-completed"}`}
      >
        {completed ? "Completed" : "Not Completed"}
      </div>
    </div>
  );
}

export { Header, TodoItem };
