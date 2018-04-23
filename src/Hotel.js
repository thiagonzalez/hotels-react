import React, { Component } from 'react';

class Hotel extends Component {
  render() {
    return(
      <article>
        <img src="http://placehold.it/262x262/000" alt="title" className="thumbnail" />
          
        <div className="description">
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i> 
          </div>

          <h2 className="header-2">Hyatt Place Charlotte Airport/Lake Pointe</h2>
          <p>This hotel is located 7 miles from downtown Charlotte and 5 miles from Charlotte Douglas International Airport</p>

          <div className="actions">
            <a href="#" className="button button-smaller button-inactive">Book now</a>
            <a href="#" className="button button-smaller button-secondary">Price history</a>
          </div>
        </div>

        <div className="information">
          <div className="item price-total">
            <span>Total <strong>8 nights</strong></span>
            <span className="price">$670</span>
          </div>

          <div className="item price-night">
            <span>Per night</span>
            <span className="price">$670</span>
          </div>
        </div>
      </article>  
    );
  }
}

export default Hotel;
