import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dash-title">Dashboard</h1>

      <p className="dash-subtitle">
        Welcome to the Task Workflow Management Portal
      </p>

      <div className="dash-boxes">
        <div className="dash-box pending-box">
          <h3>Pending Tasks</h3>
          <p>Tasks that are yet to be started.</p>
        </div>

        <div className="dash-box progress-box">
          <h3>In Progress</h3>
          <p>Tasks currently being worked on.</p>
        </div>

        <div className="dash-box completed-box">
          <h3>Completed</h3>
          <p>Tasks that have been finished.</p>
        </div>
      </div>

      <Link to="/workflow" className="dash-button">
        Go to Workflow
      </Link>
    </div>
  );
}

export default Dashboard;
