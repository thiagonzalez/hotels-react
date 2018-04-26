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
    this.handleApiInformation = this.handleApiInformation.bind(this);
    this.handleChangePriceRange = this.handleChangePriceRange.bind(this);

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
      filters: {
        range: {
          min: 0, 
          max: 1000
        },
        selectedValue: {
          min: 0,
          max: 1000
        }
      },
      showResults: false
    };
  }

  handleChangePriceRange(range) {
    console.log(range.max, range.min);

    this.setState({ 
      filters: {
        range: {
          min: this.state.filters.range.min, 
          max: this.state.filters.range.max
        },
        selectedValue: { 
          min: range.min,
          max: range.max
        }
      }
    });
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
    this.handleApiCall();
  }

  handleChangeDateRange(range) {
    this.setState({dateRange: range});
  }

  handleApiCall() {
    fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(response => response.json())
      .then(data => this.handleApiInformation(data.hotels));
  }

  handleApiInformation(hotels) {
    function getPrices(){
      return hotels.map(hotel => hotel.price);
    }

    const minPrice = Math.min(...getPrices());
    const maxPrice = Math.max(...getPrices());

    this.setState({ 
      hotels: {
        hotelList: hotels,
        loading: false
      },
      filters: {
        range: {
          min: Math.round(minPrice), 
          max: Math.round(maxPrice)
        },
        selectedValue: {
          min: Math.round(minPrice),
          max: Math.round(maxPrice)
        }
      }
    });
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
            changePriceRange={this.handleChangePriceRange}
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
