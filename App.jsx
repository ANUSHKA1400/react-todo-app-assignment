import React, { useState, useEffect } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
// You might not need App.css much anymore if using Bootstrap heavily,
// but you can keep it for custom overrides or unique styles not covered by Bootstrap.
// import './App.css'; // Consider removing or keeping for minimal custom styles

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodoText, setNewTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditClick = (id, text) => {
    setEditingTodoId(id);
    setEditingTodoText(text);
  };

  const handleSaveEdit = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editingTodoText } : todo
    ));
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditingTodoText('');
  };

  return (
    // Apply Bootstrap container, padding, shadow, etc.
    <div className="container mt-5 p-4 rounded shadow-lg bg-white">
      <Header />
      <form onSubmit={handleAddTodo} className="input-group mb-3">
        <input
          type="text"
          className="form-control" // Bootstrap class for input
          placeholder="Add a new to-do"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add To-Do</button> {/* Bootstrap primary button */}
      </form>
      <ToDoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onToggleComplete={handleToggleComplete}
        onEditClick={handleEditClick}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
        editingTodoId={editingTodoId}
        editingTodoText={editingTodoText}
        setEditingTodoText={setEditingTodoText}
      />
    </div>
  );
}

export default App;