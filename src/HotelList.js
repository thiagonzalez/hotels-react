import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(response => response.json())
      .then(data => this.setState({ hotels: data.hotels, loading: false }));
  }

  render() {
    const { hotels, loading } = this.state;

    const list = loading ? (
      <i className="fas fa-spinner" />
    ) : (
      <div id="hotel-list">
        {hotels.map(hotel =>
          <Hotel key={hotel.name} hotel={hotel} />
        )}
      </div>
    );

    return(
      <div>{list}</div>
    );
  }
}

export default HotelList;
