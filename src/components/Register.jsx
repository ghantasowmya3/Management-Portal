import React, { useState } from "react";

function Register({ setEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeId: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.employeeId) {
      alert("Please fill all fields");
      return;
    }

    setEmployee(formData);
  };

  return (
    <div className="register-container">
      <h1>Employee Registration / Sign In</h1>

      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="name"
          placeholder="Enter Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="employeeId"
          placeholder="Enter Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Register;