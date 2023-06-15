import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/todoCard";
import { todoList } from "./mocks/todos";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList /> 
      <TodoList /> 
      <TodoList /> 
    </div>
  );
}

export default App;
