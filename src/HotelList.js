import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {

  render() {
    const { hotels } = this.props;
    let rating = this.props.rating.length > 0 ? this.props.rating : ['1','2','3','4','5'];

    const filteredHotels = hotels.hotelList.filter(hotel =>
        rating.includes(hotel.rate + '') &&
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
