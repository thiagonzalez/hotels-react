import React, { Component } from 'react';
import Filter from './Filter';
import HotelList from './HotelList';

class Content extends Component {
  render() {
    return(
      <section id="content">
        <div className="container">
          <h5 className="header-1">Best choices between {this.props.formatDateDisplay(this.props.dateRange.from, 'Choose a Date')} and {this.props.formatDateDisplay(this.props.dateRange.to, 'Choose a Date')}</h5>

          <Filter />
          <HotelList {...this.props} />
        </div>
      </section>
    );
  }
}

export default Content;
