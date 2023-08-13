import './accueil.css';
import { Route, Routes } from 'react-router-dom';
import {useState, useEffect} from "react";
import {AccueilComponent} from './AccueilComponent';
import {Login} from './Login';
import {Register} from './Register';
import {NavBar} from './NavBar';
import {CreationBien} from './CreationBien';

const App = () => {
  
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<AccueilComponent/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/creationBien" element={<CreationBien/>} />
        </Routes>
      </>
            
  );
}

export default App;
