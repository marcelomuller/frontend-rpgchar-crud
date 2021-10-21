import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import System from './components/System';
import Table from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<System />} />
          <Route path="/chars" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
