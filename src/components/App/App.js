import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';


import Rides from '../Rides/Rides'
import Header from '../Header/Header';

import store from '../../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Rides />
        </div>
      </Provider>
    )
  }
}

export default App;
