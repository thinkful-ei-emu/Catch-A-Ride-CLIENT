import React, { Component } from 'react';
import './App.css';

import Rides from '../Rides/Rides';
import Header from '../Header/Header';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faMapMarkedAlt)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Rides />
      </div>
    )
  }
}

export default App;
