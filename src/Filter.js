import React, { Component } from 'react';
import Rating from 'react-rating';

class Filter extends Component {
  render() {
    const rating = [1, 2, 3, 4, 5];
    
    return(
      <aside id="filter">
        <h6 className="header-1">
          <i className="fas fa-filter"></i>
          Filters
        </h6>
          
        <div className="price-range">
          <span className="header-3">Price Range per <strong>night</strong></span>

          <div id="price-slider" data-min-value="0" data-max-value="600"></div>

          <div className="left">
            <span>Min</span>
            <strong id="price-slider-min-text" className="value"></strong>
          </div>

          <div className="right">
            <span>Max</span>
            <strong id="price-slider-max-text" className="value"></strong>
          </div>
        </div>

        <div className="rating">
          <span className="header-3">Stars</span>

          <ul>
            {rating.map(i =>
              <li key={i}>
                <input id={"star-" + i} type="checkbox" />
                <label htmlFor={"star-" + i}>
                  <Rating readonly initialRating={i} emptySymbol="far fa-star" fullSymbol="fas fa-star" />
                </label>
              </li>
            )}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Filter;
