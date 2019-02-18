import React, { Component } from 'react';
import Todolist from './todolist'
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todolist/>
      </div>
    );
  }
}
export default App;
