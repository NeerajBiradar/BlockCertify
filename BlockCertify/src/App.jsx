import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import FetchAll from "./components/FetchAll";
import Generate from "./components/Generate";
import About from "./components/About";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchAll />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
