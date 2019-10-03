import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
