import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Register, TodoDashboard } from 'pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TodoDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
