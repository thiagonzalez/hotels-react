import React, { Component } from 'react';
import Rating from 'react-rating';

class Hotel extends Component {
  render() {
    const hotel = this.props.hotel;
    hotel.price = Math.round(hotel.price);

    return(
      <article>
        <img src={hotel.image} alt={hotel.name} className="thumbnail" />
          
        <div className="description">
          <div className="rating">
            <Rating readonly initialRating={hotel.rate} emptySymbol="far fa-star" fullSymbol="fas fa-star" />
          </div>

          <h2 className="header-2">{hotel.name}</h2>
          <p>{hotel.description}</p>

          <div className="actions">
            <button className="button button-smaller" disabled>Book now</button>
            <button className="button button-smaller button-secondary">Price history</button>
          </div>
        </div>

        <div className="information">
          <div className="item price-total">
            <span>Total <strong>{this.props.dateRange.numberOfNights} nights</strong></span>
            <span className="price">${hotel.price * this.props.dateRange.numberOfNights}</span>
          </div>

          <div className="item price-night">
            <span>Per night</span>
            <span className="price">${hotel.price}</span>
          </div>
        </div>
      </article>  
    );
  }
}

export default Hotel;
