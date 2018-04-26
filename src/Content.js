import React, { Component } from 'react';
import Filter from './Filter';
import HotelList from './HotelList';

class Content extends Component {
  render() {
    const { hotels } = this.props;

    const list = hotels.loading ? (
      <div>
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div>
        <Filter changePriceRange={this.props.changePriceRange} {...this.props.filters} />
        <HotelList {...this.props} />
      </div>
    );

    return(
      <section id="content">
        <div className="container">
          <h5 className="header-1">Best choices between {this.props.formatDateDisplay(this.props.dateRange.from, 'Choose a Date')} and {this.props.formatDateDisplay(this.props.dateRange.to, 'Choose a Date')}</h5>

          {list}
        </div>
      </section>
    );
  }
}

export default Content;
