import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './components/admin';
import store from './config/store';
import { Provider } from "react-redux";
import Home from './components/home/Home';

class App extends React.PureComponent {
  render(){
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/admin" component={Admin}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
