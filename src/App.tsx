import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Login from "./Pages/Login/Login"
import Upload  from './Pages/Upload/Upload';
import Employees from "./Pages/Employees/Employees"


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Login/>}
        />
        <Route
          path='/employees'
          element={<Employees/>}
        />
        <Route
          path='/upload'
          element={<Upload/>}
        />
      </Routes>
      
    </HashRouter>
  );
}

export default App;
