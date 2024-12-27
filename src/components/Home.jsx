import React from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';


const home = () => {
    const token = localStorage.getItem("jwtToken");
    const user = JSON.parse(localStorage.getItem("user"));
    const username = user?.firstName;
    const userrole = user?.role;
    const allowedRolesForRegistration = ["admin", "client"];
    const allowedRolesForList = ["admin"];
    const navigate = useNavigate();

    if (!token) {
      return <Navigate to="/login" />;
    }

    const addStudent = () => {
      navigate('/register');
    };
    
  
    const listStudent = () => {
      navigate('/list');
    };

    const handleLogout = () => {
      // Remove the JWT token and user data from localStorage
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
  
      // Optionally log a message
      console.log("User logged out successfully!");
  
      // Redirect the user to the login page (or any other page)
      navigate('/');
    };

    return (
            <div>
        <button onClick={handleLogout} className="btn btn-logout">
        Logout
      </button>
      <h1>Welcome, {username}</h1>
      <div>
        <button className="btn btn-add" 
                disabled={!allowedRolesForRegistration.includes(userrole)}
                onClick={addStudent}>
          Add Student
        </button>
        <button className="btn btn-list" 
                disabled={!allowedRolesForList.includes(userrole)}
                 onClick={listStudent}>
          List Students
        </button>
      </div>
    </div>
    );
};

export default home;