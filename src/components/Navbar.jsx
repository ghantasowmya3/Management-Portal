import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Task Portal</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/workflow">Workflow</Link>
      </div>
    </nav>
  );
}

export default Navbar;
