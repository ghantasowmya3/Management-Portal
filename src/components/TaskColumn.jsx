import React from "react";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, status, changeStatus }) {
  return (
    <div className="column">
      <div className={`column-header ${status}`}>
        <h3>{title}</h3>
        <span>{tasks.length} Tasks</span>
      </div>

      <div className="column-body">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
