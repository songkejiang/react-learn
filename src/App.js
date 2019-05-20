import React, { Component } from 'react';
import { GlobalStyle} from './style.js'
import {GlobaIconFont} from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <GlobaIconFont />
        <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home} ></Route> 
            <Route path='/detail' component={Detail} ></Route> 
          </BrowserRouter>  
        </Provider>
      </div>
    );
  }
}
export default App;
