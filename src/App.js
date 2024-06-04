import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "../src/context/UserContext.jsx";
import Login from "../src/pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import "./App.css";
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
