import React, { Component } from 'react';
import { format } from 'date-fns';

import Header from './Header';
import Calendar from './Calendar';
import Content from './Content';
import Footer from './Footer';

import './css/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleShowResults = this.handleShowResults.bind(this);
    this.handleFormatDateDisplay = this.handleFormatDateDisplay.bind(this);
    this.handleChangeDateRange = this.handleChangeDateRange.bind(this);
    this.handleApiCall = this.handleApiCall.bind(this);

    this.state = {
      dateRange: {
        from: undefined,
        to: undefined,
        numberOfNights: undefined
      },
      hotels: {
        hotelList: [],
        loading: true
      },
      showResults: false
    };
  }

  handleFormatDateDisplay(date, defaultText) {
    if (!date) return defaultText;
    return (
      <span>
        {format(date, 'MMMM ')}
        <strong>{format(date, 'D')}</strong>
        {format(date, ', YYYY')}
      </span>
    );
  }

  handleShowResults() {
    this.setState({ showResults: true })
  }

  handleChangeDateRange(range) {
    this.setState({dateRange: range});
  }

  handleApiCall(hotels) {
    this.setState({ 
      hotels: {
        hotelList: hotels,
        loading: false
      }
    })
  }

  render() {
    return (
      <div>
        <Header /> 
        <Calendar
          {...this.state.dateRange}
          showResults={this.handleShowResults} 
          formatDateDisplay={this.handleFormatDateDisplay} 
          changeDateRange={this.handleChangeDateRange} />

        { this.state.showResults ? 
          <Content 
            {...this.state} 
            ApiCall={this.handleApiCall}
            formatDateDisplay={this.handleFormatDateDisplay} /> 
        : 
          null 
        }
        
        <Footer />
      </div>
    );
  }
}

export default App;
