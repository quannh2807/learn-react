import React, { Component } from "react";

import "./components/InputItem";
import './App.css';
import InputItem from "./components/InputItem";


class App extends Component {
  render() {
    return (
        <div className="App">
            <InputItem
                label="User Name"
                type="text"
                placeholder="Nhập username"
            />
        </div>
    );
  }
}

export default App;
