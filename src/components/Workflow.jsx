import React, { useEffect, useState, useCallback } from "react";
import TaskColumn from "./TaskColumn";
import TaskForm from "./TaskForm";

function Workflow() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Simulated async API fetch
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

      const sampleTasks = [
        { id: 1, title: "Design UI", status: "pending" },
        { id: 2, title: "Develop API", status: "inprogress" },
        { id: 3, title: "Testing", status: "completed" }
      ];

      setTasks(sampleTasks);
    } catch (err) {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔹 Add Task (async)
  const addTask = useCallback(async (title) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulate API

      const newTask = {
        id: Date.now(),
        title,
        status: "pending"
      };

      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      setError("Failed to add task");
    }
  }, []);

  // 🔹 Change Status (async)
  const changeStatus = useCallback(async (id, newStatus) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300)); // simulate API

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task
        )
      );
    } catch (err) {
      setError("Failed to update task status");
    }
  }, []);

  // 🔹 Derived State
  const pendingTasks = tasks.filter((t) => t.status === "pending");
  const inProgressTasks = tasks.filter((t) => t.status === "inprogress");
  const completedTasks = tasks.filter((t) => t.status === "completed");

  if (loading) return <p className="container">Loading...</p>;
  if (error) return <p className="container">{error}</p>;

  return (
    <div className="container">
      <h1 className="page-title">Task Workflow</h1>

      {/* Progress Section */}
      <div className="progress-section">
        <span>Overall Progress</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width:
                tasks.length === 0
                  ? "0%"
                  : `${(completedTasks.length / tasks.length) * 100}%`
            }}
          ></div>
        </div>
        <span>
          {tasks.length === 0
            ? "0%"
            : Math.round(
                (completedTasks.length / tasks.length) * 100
              ) + "%"}
        </span>
      </div>

      <TaskForm addTask={addTask} />

      <div className="board">
        <TaskColumn
          title="Pending"
          tasks={pendingTasks}
          status="pending"
          changeStatus={changeStatus}
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgressTasks}
          status="inprogress"
          changeStatus={changeStatus}
        />
        <TaskColumn
          title="Completed"
          tasks={completedTasks}
          status="completed"
          changeStatus={changeStatus}
        />
      </div>
    </div>
  );
}

export default Workflow;