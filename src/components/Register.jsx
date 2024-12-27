import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import EmployeeService from "./EmployeeService";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
   const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo

    const userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: "user", // Fixed role
      username: username,
      password: password,
    };

    // Assuming EmployeeService is correctly set up
    EmployeeService.registerUser(userDetails)
      .then(() => {
        navigate('/'); // Navigate after successful registration
      })
      .catch((error) => {
        console.error('Registration Failed!....', error);
      });

    console.log("done");
  };

  const cancel = () => {
    navigate('/'); // Navigate to home or login on cancel
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Admin" disabled>Admin</option>
            <option value="Client">User</option>
          </select>
        </div> */}
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-save">
          Register
        </button>
        <button type="button" className="btn-cancel" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Register;
