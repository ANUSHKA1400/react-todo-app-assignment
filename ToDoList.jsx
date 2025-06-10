import React from 'react';
import ToDoItem from './ToDoItem';
// import './App.css'; // Not needed much here

function ToDoList({
  todos,
  onDeleteTodo,
  onToggleComplete,
  onEditClick,
  onSaveEdit,
  onCancelEdit,
  editingTodoId,
  editingTodoText,
  setEditingTodoText
}) {
  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-center text-muted fst-italic">No to-do items yet. Add some!</p>
      ) : (
        <ul className="list-group"> {/* Bootstrap list group */}
          {todos.map(todo => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleComplete={onToggleComplete}
              onEditClick={onEditClick}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              isEditing={editingTodoId === todo.id}
              editingTodoText={editingTodoText}
              setEditingTodoText={setEditingTodoText}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;