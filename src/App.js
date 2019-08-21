import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './Navigation';
import AppRouter from './routes';
import './App.css';
import 'react-table/react-table.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <hr />
          <AppRouter />
        </div>
      </Router>
    </div>
  );
}

export default App;
