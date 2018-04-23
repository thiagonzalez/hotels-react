import React, { Component } from 'react';
import Filter from './Filter';
import HotelList from './HotelList';

class Content extends Component {
  render() {
    return(
      <section id="content">
        <div className="container">
          <h5 className="header-1">Best choices between -date start- and -date end-</h5>

          <Filter />
          <HotelList />
        </div>
      </section>
    );
  }
}

export default Content;
