import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const meuArray = ['feijão', 'arroz', 'carne', 'farofa'];

class App extends React.Component {
  render() {
    return (
      <ul>{ meuArray.map((element) => Task(element)) }</ul>
    )
  }
}

export default App;
