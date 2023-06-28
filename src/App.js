import React, { Component, useEffect } from "react";
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
          <div className="layers">
            <div className="layer__header">
                <div className="layers__captions">Ваш помощник</div>
                <div className="layer__title">Заметки</div>
            </div>

            <div className="layer layers__base"></div>
            <div className="layer layers__title"></div>
            <div className="layer layers__front"></div>
          </div>

        </header>


        <div className="pena">
        <TodoWrapper />
        </div>

      </div>
    );
  }
}
export default App;
