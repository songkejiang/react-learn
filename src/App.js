import React, { Component } from 'react';
// import Todolist from './todolist'
import List from './list'
import { GlobalStyle} from './appcss.js'
// import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <List/>
      </div>
    );
  }
}
export default App;
