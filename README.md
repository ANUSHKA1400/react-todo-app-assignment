<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# react-todo-app-assignment
>>>>>>> 092bc3d4a1b989029a8ff26421caed4e64704ded
# My To-Do List Application

A simple and interactive To-Do List application built with React.js and Vite, featuring a clean user interface styled with Bootstrap. This application allows users to effectively manage their daily tasks.

## Features

* [cite_start]**Add Tasks**: Easily add new to-do items to your list.
* [cite_start]**Mark as Completed**: Mark tasks as done, visually indicating completion with a strikethrough and a success background.
* [cite_start]**Delete Tasks**: Remove unwanted or completed tasks from the list.
* [cite_start]**Edit Tasks**: Modify existing to-do items to update their description.
* **Persistent Data**: To-do items are saved in your browser's local storage, so your list remains intact even after closing and reopening the browser.
* [cite_start]**User-Friendly Interface**: Styled with Bootstrap for a visually appealing and intuitive user experience.

## Technologies Used

* [cite_start]**React.js**: A JavaScript library for building user interfaces.
* [cite_start]**Vite**: A fast build tool for modern web projects, used for project setup.
* [cite_start]**Bootstrap 5**: A popular CSS framework for responsive and mobile-first frontend development.

## Project Structure

[cite_start]The application is composed of the following functional React components:

* [cite_start]`App.jsx`: The main component managing the application's state (the list of to-do items) and core logic.
* [cite_start]`Header.jsx`: Displays the title of the To-Do List application.
* [cite_start]`ToDoList.jsx`: Renders the collection of `ToDoItem` components dynamically using the `map` function.
* [cite_start]`ToDoItem.jsx`: Represents an individual to-do item, handling its display, edit, delete, and completion actions.

## How to Run Locally

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js](https://nodejs.org/en/download/) (which includes npm)

### Installation

1.  **Clone the repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/ANUSHKA1400/react-todo-app-assignment.git](https://github.com/ANUSHKA1400/react-todo-app-assignment.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd react-todo-app-assignment
    ```

3.  **Install dependencies:**
    This command will install all the necessary packages listed in `package.json`:
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    Once the dependencies are installed, you can start the application:
    ```bash
    npm run dev
    ```

2.  **Open in browser:**
    The application will typically be served at `http://localhost:5173/` (or another port if 5173 is in use). Open this URL in your web browser to view the To-Do List application.

## Submission Details

[cite_start]This project fulfills the requirements of the React Assignment, demonstrating the use of functional components, state, props, list rendering, event handling (add, delete, complete, edit), and styling using Bootstrap.

---
