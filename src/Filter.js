import React, { Component } from 'react';

class Filter extends Component {
  render() {
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
            <li>
              <input id="star-1" type="checkbox" />
              <label for="star-1">
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </li>

            <li>
              <input id="star-2" type="checkbox" />
              <label for="star-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </li>

            <li>
              <input id="star-3" type="checkbox" />
              <label for="star-3">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </li>

            <li>
              <input id="star-4" type="checkbox" />
              <label for="star-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </label>
            </li>

            <li>
              <input id="star-5" type="checkbox" />
              <label for="star-5">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </label>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Filter;
