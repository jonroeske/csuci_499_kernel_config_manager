import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DashboardIndex from './DashboardIndex';
import useToken from './useToken';

function App() {
  const {token, setToken} = useToken();
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<DashboardIndex setToken={setToken}/>} />
          <Route path="*" element={<DashboardIndex setToken={setToken}/>} />
        </Routes>
      </Router>
  );
}

export default App;
