import axios from "axios";
import React, { Component } from 'react';

const EDUCONNECT_URL = `http://localhost:8080`

class EmployeeService extends Component {

  token = null;
  

  // Function to set the token
  setToken(newToken) {
    this.token = newToken;
  }

  // Add the token to the headers for each request
  getAuthHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`, // Replace 'Bearer' with the appropriate prefix if necessary
        'Content-Type': 'application/json',    // Ensure the content type is JSON
      },
    };
  }

  sendPreflightRequest(url) {
    return axios({
      method: 'options',
      url: url,
      headers: {
        'Authorization': `Bearer ${this.token}`,  // Include Authorization header
      },
    });
  }

     

    userLogin(loginDetails){
         
      return axios.post(`${EDUCONNECT_URL}/account/login`,loginDetails)
         
    }

    registerUser(user){
      return axios.post(`${EDUCONNECT_URL}/account/register`,user)

    }      
    getAllEmployees(){
        return axios.get(`${EDUCONNECT_URL}/home/list`, this.getAuthHeaders());
    }
        
    }

export default new EmployeeService();
