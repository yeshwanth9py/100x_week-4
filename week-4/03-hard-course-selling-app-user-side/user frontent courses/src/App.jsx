import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landingpage from "./components/Landingpage.jsx";  // not components/landing
// import './App.css'
import Signup from './components/Signup';
import Login from './components/Login.jsx';
import Courses from './components/Courses.jsx';
import Purchased from './components/Purchased.jsx';
import Course_no from './components/Course_no.jsx';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/purchased" element={<Purchased/>}/>
        <Route path="/courses/:id" element={<Course_no/>}/>
      </Routes>
    </Router>
  )
}

export default App





