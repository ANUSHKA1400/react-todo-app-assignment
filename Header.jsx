import React from 'react';
// import './App.css'; // Not needed if using Bootstrap for header styling

function Header() {
  return (
    <header className="text-center my-4"> {/* Center text, vertical margin */}
      <h1 className="display-4 text-primary">My To-Do List</h1> {/* Larger heading, primary color */}
    </header>
  );
}

export default Header;