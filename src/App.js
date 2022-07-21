import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';

function App() {
  const token = localStorage.clear();

  if(!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <Profile />
      <BrowserRouter>
        <Route>
          <Link path="/">
            <Profile />
          </Link>
          <Link path="/profile">
            <Profile />
          </Link>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;