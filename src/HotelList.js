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

    const list = hotels.loading ? (
      <div id="hotel-list">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div id="hotel-list">
        {hotels.hotelList.map(hotel =>
          <Hotel key={hotel.name} hotel={hotel} {...this.props} />
        )}
      </div>
    );

    return(
      <div>{list}</div>
    );
  }
}

export default HotelList;
