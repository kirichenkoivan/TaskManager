import React, { Component } from "react";
import logo from "./cats.png";
import { useState } from 'react';
import "./App.css";
import { eel } from "./eel.js";

import { TodoWrapper } from './components/TodoWrapper';



class App extends Component {
  constructor(props) {
    super(props);
    eel.set_host("ws://localhost:8888");
    eel.hello();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ваши заметки</h1>
        </header>


        <TodoWrapper />


      </div>
    );
  }
}
export default App;
