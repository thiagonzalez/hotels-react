import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
  render() {
    const { hotels } = this.props;

    const filteredHotels = hotels.hotelList.filter(hotel => 
      Math.round(hotel.price) >= this.props.filters.selectedValue.min && 
      Math.round(hotel.price) <= this.props.filters.selectedValue.max
    );

    return(
      <div id="hotel-list">
        {filteredHotels.map(hotel =>
          <Hotel key={hotel.name} hotel={hotel} {...this.props} />
        )}
      </div>
    );
  }
}

export default HotelList;
