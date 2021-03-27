import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyPureComponent from './components/MyPureComponent';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <MyPureComponent />
    </React.Fragment>
  );
}

export default App;
