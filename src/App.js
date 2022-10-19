import './App.css';
import {  Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home/Home'
import Dashboard from './Mainpages/Dashboard/Dashboard';

function App(){
  return (

    <div className="App">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="dashboard" element={ <Dashboard /> } />
    </Routes>
   </div>
  
);

}

export default App;