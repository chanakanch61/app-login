import React from "react";
import "./App.css";
import Signin from "./Signin";
import Profile from "./Profile";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="login" element={<Signin />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
