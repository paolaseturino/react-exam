import React from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';

import Login from "./Pages/Login/Login"
import Upload  from './Pages/Upload/Upload';
import Employees from "./Pages/Employees/Employees"
import store from './Redux/store';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={ <Login/>}
        />
        <Route
          path='/employees'
          element={ <Employees/>}
        />
        <Route
          path='/upload'
          element={<Upload/> }
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
