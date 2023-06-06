
import './App.css';

import React, { Component } from 'react';
import Navigation from './components/Navigation';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navigation/>
        <center><p>This News App is designed by DevendarBorra.</p></center>
        <News/>
      </div>
    );
  }
}
