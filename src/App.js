import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import AppBackground from './assets/img/app_background.jpg';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${AppBackground})`
      }}
    >
      <HomePage />
    </div>
  );
}

export default App;
