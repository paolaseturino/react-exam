import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from "./Pages/Login/Login"
import Upload  from './Pages/Upload/Upload';
import Employees from "./Pages/Employees/Employees"
import store from './Redux/store';
import NavBar from './Pages/NavBar/navBar';

const App = () => {

  const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const auth = store.getState().session.auth
    return true ? children : <Navigate to="/" replace />;
  };
  
  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route
            path='/employees'
            element={  (
              <>
                <NavBar title="Employees"/>
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
                <NavBar title="Upload File"/>
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
            <NavBar title="Login"/>
            <Login/>
          </>}
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
