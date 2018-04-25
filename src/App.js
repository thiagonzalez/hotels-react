import React, { Component } from 'react';

import Header from './Header';
import Calendar from './Calendar';
import Content from './Content';
import Footer from './Footer';

import './css/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      from: undefined,
      to: undefined,
      numberOfNights: undefined
    };
  }

  showResults() {
    this.setState({
      showResults: true
    })
  }

  render() {
    return (
      <div>
        <Header /> 
        <Calendar {...this.state} showResults={this.showResults.bind(this)} />

        { this.state.showResults ? <Content /> : null }
        
        <Footer />
      </div>
    );
  }
}

export default App;
