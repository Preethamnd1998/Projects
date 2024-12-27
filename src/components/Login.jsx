import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EmployeeService from './EmployeeService';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();

    const loginDetails = {
        username:username,
        password: password
    };

    EmployeeService.userLogin(loginDetails)
        .then((response) => {
          console.log("Login response:", response);
          const { token, user } = response.data;
          const { firstName, role } = user;
          localStorage.setItem("jwtToken", token);
          localStorage.setItem("user", JSON.stringify({ firstName, role }));
          console.log("Login successful! Token stored.");
            navigate('/home'); 
        })
        .catch((error) => {
            console.error('Login Failed!....', error);
        });
        

    
};

const cancel =() =>{
    navigate('/');
};

    return (
        <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn-save">
          Login
        </button>
        <button type="cancel" className="btn-cancel" onClick={cancel}>
          Cancel
        </button>

         {/* Link to Registration Page */}
        <div>
                <p>New user? <Link to="/register">Register here</Link></p>
        </div>

      </form>
    </div>
    );
};

export default Login;