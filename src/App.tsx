import * as React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from '././components/home/Login';
import Register from '././components/home/Register';
import Chatbot from '././components/Chatbot';


function App() {
  return (
    <div className="Apps">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


