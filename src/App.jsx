import React from 'react';
import './App.css'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home';
import Register from './components/Register';
import List from './components/List';


function App() {
  return (
    <div className="App">
     
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}> </Route>
        <Route path="/home" element ={<Home/>}></Route>
        <Route path="/register" element ={<Register/>}></Route>
        <Route path="/list" element ={<List/>}></Route>
      </Routes>
  </Router>
     
  </div>
  )
}

export default App
