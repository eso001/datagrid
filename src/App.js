import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './GridContainer'
import 'bootstrap/dist/css/bootstrap.css';
import {Switch, Route, Link} from'react-router-dom'
import AntDesign from './AntDesign'
import DetailedGrid from './DetailedGrid'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <ul>
            <li className="nav-item">
            <Link to='/'>Grid</Link>
            </li>
            <li className="nav-item">
              <Link to='/ant-design'>Ant Design</Link>   
            </li>
            <li className="nav-item">
              <Link to='/detailed-grid'>detailed grid</Link>   
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Example}/>
          <Route path='/ant-design' component={AntDesign}/>
          <Route path='/detailed-grid' component={DetailedGrid} />
        </Switch>
      </div>
    );
  }
}

export default App;
