// src/App.js (modified by Task 3 developer)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid"; // Import uuid

import Header from "./components/Header/Header";
import TaskListView from "./components/TaskListView/TaskListView";
import AddTaskView from "./components/AddTaskView/AddTaskView";

function App() {
  // Global state for the list of tasks
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Sample Task 1",
      description: "Do something",
      priority: "High",
    },
    {
      id: uuidv4(),
      title: "Sample Task 2",
      description: "Do another thing",
      priority: "Medium",
    },
  ]);

  // Function to add a new task
  const addTask = (task) => {
    const newTask = { id: uuidv4(), ...task };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Pass state and functions down as props
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<TaskListView tasks={tasks} deleteTask={deleteTask} />}
          />
          <Route path="/add" element={<AddTaskView addTask={addTask} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
