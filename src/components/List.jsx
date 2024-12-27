import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

const List = () => {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  

  useEffect(() => {
    if (!token) {
      console.error("Token not found. Redirecting to login.");
      navigate('/'); // Redirect to login if token is missing
      return;
    }
    EmployeeService.setToken(token); 
    EmployeeService.getAllEmployees()
    .then((res) => {
      console.log('Server response:', res);
      setEmployees(res.data);
    }).catch((error) => {
      console.error('Error fetching Employee:', error);
    });
  }, [token, navigate]);


  const deleteEmployee = (id) => {
    EmployeeService.setToken(token); 
    const confirmDelete = window.confirm('Are you sure you want to delete this Employee?');
    if (confirmDelete) {
        EmployeeService.deleteEmployee(id)
        .then(() => {
          setEmployees(employees.filter(student => student.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting Employee:', error);
        });
    }
  };   
  const updateEmployee = (id) => {
    navigate(`/update/${id}`);
  };     

  const goBack = () => {
    if (!token) {
      console.error("Token not found. Redirecting to login.");
      navigate('/'); // Redirect to login if token is missing
      return;
    }
    navigate('/home');
  };


    return (
        <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.role}</td>
              <td>
                <button className="btn btn-update" onClick={() => updateEmployee(employee.id)}>
                  Update
                </button>
                <button className="btn btn-delete" onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-back" onClick={goBack}>
        Back
      </button>
    </div>
    );
};

export default List;