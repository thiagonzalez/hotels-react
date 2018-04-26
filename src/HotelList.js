import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
  componentDidMount() {
    fetch('https://www.raphaelfabeni.com.br/rv/hotels.json')
      .then(response => response.json())
      .then(data => this.props.ApiCall(data.hotels));
  }

  render() {
    const { hotels } = this.props;

    return(
      <div id="hotel-list">
        {hotels.hotelList.map(hotel =>
          <Hotel key={hotel.name} hotel={hotel} {...this.props} />
        )}
      </div>
    );
  }
}

export default HotelList;
