import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from "react";
import Navbar from './Component/Navbar/Navbar'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <AllRoutes/>
      
      </Router>
    </div>
  );
}

export default App;