import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <PrivateRoute exact path="/protected" component={Friends} />
    </div>
  );
}

export default App;
