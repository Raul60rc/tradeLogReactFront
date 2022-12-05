import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Login/LoginForm';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import React, { Component } from 'react'
import AboutUs from './pages/AboutUs';


function App() { // this line giving error saying App has already been declared.
  return (
    <div>
      <div className="App">
        <Navbar/>
        <LoginForm/>
      </div>
    <div >
    </div>
    </div>

  );
}

export default App;
