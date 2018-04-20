import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import HelloWorld from './containers/HelloWorld'
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import combReducer from './reducers/reducer'
import './App.css';

var store = createStore(
  combineReducers({
    combReducer
  }),
  applyMiddleware(logger, thunk, promise())
) 

class App extends Component {
  render() {
    return (
      <Provider store = { store } >
        <div className="App">
          <HelloWorld />
        </div>
      </Provider>
    );
  }
}

export default App;
