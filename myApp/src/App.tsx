import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router
}from "react-router-dom"
import { NavBar } from './components/NavBar';

import Register from "./components/Register"

import { Welcome } from './components/welcom';
import "./index.css"

 const App = () => {
  return (
    <>
      <Router>
        <div className="App">
        <NavBar/>
          <Routes>
            <Route  path="/Welcome" element={<Welcome/>}></Route>
            <Route  path="/Register" element={<Register/>}></Route>
        </Routes>
        </div>
      </Router>
    </>
  );
};


export default App

