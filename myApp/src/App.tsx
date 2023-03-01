import * as React from 'react';
import {
  Routes,
  Route,
  Link,
}from "react-router-dom"
import { NavBar } from './components/NavBar';
import Register from "./components/Register"
import { ThankYou } from './components/thankYou';
import { Welcome } from './components/welcom';
import "./index.css"

 const App = () => {
  return (
    <>
        <div className="App">
        <NavBar/>
          <Routes>
            <Route  path="/Welcome" element={<Welcome/>}></Route>
            <Route  path="/Register" element={<Register/>}></Route>
            <Route  path="/thankYou" element={<ThankYou/>}></Route>
        </Routes>
        </div>
    </>
  );
};


export default App

