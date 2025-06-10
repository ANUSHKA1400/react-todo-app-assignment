import React from 'react';
// import './App.css'; // Not needed much here

function ToDoItem({
  todo,
  onDeleteTodo,
  onToggleComplete,
  onEditClick,
  onSaveEdit,
  onCancelEdit,
  isEditing,
  editingTodoText,
  setEditingTodoText
}) {
  return (
    // List group item, flex display, justify content between, align items center,
    // conditional background for completed items
    <li className={`list-group-item d-flex justify-content-between align-items-center mb-2 ${todo.completed ? 'list-group-item-success text-decoration-line-through' : ''}`}>
      {isEditing ? (
        // Flex for editing elements
        <div className="d-flex w-100 align-items-center">
          <input
            type="text"
            className="form-control me-2" // Bootstrap form control with right margin
            value={editingTodoText}
            onChange={(e) => setEditingTodoText(e.target.value)}
          />
          <button onClick={() => onSaveEdit(todo.id)} className="btn btn-success btn-sm me-2">Save</button>
          <button onClick={onCancelEdit} className="btn btn-secondary btn-sm">Cancel</button>
        </div>
      ) : (
        <>
          <span
            onClick={() => onToggleComplete(todo.id)}
            className="flex-grow-1 cursor-pointer" // Make span grow, pointer cursor
          >
            {todo.text}
          </span>
          <div className="btn-group"> {/* Bootstrap button group for spacing */}
            <button onClick={() => onEditClick(todo.id, todo.text)} className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;