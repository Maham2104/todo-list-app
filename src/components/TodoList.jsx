import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete, editTodo, clearCompleted }) {
  if (todos.length === 0) {
    return <p className="empty">No todos yet! 🎉</p>;
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </ul>

      <div className="footer">
        <p>
          {completedCount}/{todos.length} completed
        </p>
        {completedCount > 0 && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
