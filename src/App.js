import React, { Component } from 'react';

import Header from './Header';
import Calendar from './Calendar';
import Content from './Content';
import Footer from './Footer';

import './css/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <Calendar />

        <Content />
        
        <Footer />
      </div>
    );
  }
}

export default App;
