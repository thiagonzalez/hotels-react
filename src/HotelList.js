import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(response => response.json())
      .then(data => this.setState({ hotels: data.hotels }));
  }

  render() {
    const { hotels } = this.state;

    return(
      <div id="hotel-list">
        {hotels.map(hotel =>
          <Hotel key={hotel.name} hotel={hotel} />
        )}
      </div>
    );
  }
}

export default HotelList;
