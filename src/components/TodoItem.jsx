import { useState } from "react";

function TodoItem({ todo, index, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    if (newText.trim() !== "") {
      editTodo(index, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-section">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            autoFocus
          />
          <button onClick={handleSave} className="edit">Save</button>
          <button onClick={() => setIsEditing(false)} className="delete">Cancel</button>
        </div>
      ) : (
        <>
          <span onClick={() => toggleComplete(index)}>{todo.text}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
            <button onClick={() => deleteTodo(index)} className="delete">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
