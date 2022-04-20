import React, { Fragment } from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/layout/auth/Register'
import Login from './components/layout/auth/Login'
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Landing/>} />
      </Routes>
      <section className="container">
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </section>
    </Fragment>
  </Router>

  
);

export default App;
