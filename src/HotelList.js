import React, { Component } from 'react';
import Hotel from './Hotel';

class HotelList extends Component {
  render() {
    return(
      <div id="hotel-list">
        <Hotel /> 
      </div>
    );
  }
}

export default HotelList;
