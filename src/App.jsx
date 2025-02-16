// src/App.js
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Inbox from "./components/Inbox";
import Compose from "./components/Compose";
import Navbar from "./components/Navbar";
import './index.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </Router>
  );
}

export default App;
