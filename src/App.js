import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from './components/homep/homep';
import Login from './components/login/login';
import Register from './components/register/register';
import Adopt from './components/adopt/adopt';
import Nodopt from './components/nodopt/nodopt';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [ user, setLoginUser] = useState({})
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={setLoginUser}/>}>
          </Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/adopt" element={<Adopt/>}></Route>
          <Route path="/nodopt" element={<Nodopt/>}></Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
