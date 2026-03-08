import React from "react";

function TaskCard({ task, changeStatus }) {
  return (
    <div className="card">
      <p>{task.title}</p>

      {task.status !== "pending" && (
        <button onClick={() => changeStatus(task.id, "pending")}>
          Move to Pending
        </button>
      )}

      {task.status !== "inprogress" && (
        <button onClick={() => changeStatus(task.id, "inprogress")}>
          Move to In Progress
        </button>
      )}

      {task.status !== "completed" && (
        <button onClick={() => changeStatus(task.id, "completed")}>
          Move to Completed
        </button>
      )}
    </div>
  );
}

export default React.memo(TaskCard);
