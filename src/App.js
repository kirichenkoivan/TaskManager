import React, { Component, useEffect } from "react";
import logo from "./cats.png";
import { useState } from 'react';
import "./App.css";
import { eel } from "./eel.js";

import { TodoWrapper } from './components/TodoWrapper';
import {ParallHeader} from './components/ParallHeader';


class App extends Component {
  constructor(props) {
    super(props);
    eel.set_host("ws://localhost:8888");
    eel.hello();
  }



  render(){
    return (
      <div className="App">
       <ParallHeader/>
        <div className="pena">
        <TodoWrapper />
        </div>
      </div>
    );
  }
}
export default App;
