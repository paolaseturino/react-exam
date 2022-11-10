import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import Login from "./Pages/Login/Login"
import Upload  from './Pages/Upload/Upload';
import Employees from "./Pages/Employees/Employees"
import store from './Redux/store';
import { useSelector } from 'react-redux';
import NavBar from './Pages/NavBar/navBar';

const App = () => {

  const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const auth = store.getState().session.auth
    return auth ? children : <Navigate to="/" replace />;
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route
            path='/employees'
            element={  (
              <>
                <NavBar/>
                <PrivateWrapper>
                  <Employees/>
                </PrivateWrapper>
              </>
            )}
          />
          <Route
            path='/upload'
            element={(
              <>
                <NavBar/>
                <PrivateWrapper>
                  <Upload/> 
                </PrivateWrapper>
              </>
            )}
          />
        </>
        <Route
          path='*'
          element={ 
          <>
            <NavBar/>
            <Login/>
          </>}
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
