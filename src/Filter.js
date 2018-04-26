import React, { Component } from 'react';
import Rating from 'react-rating';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    
    this.changed = value => {
      const range = this.props.range;
      if ((value.min < range.min) || (value.max > range.max)) return;

      this.props.changePriceRange(value);
    }
  }

  render() {
    const rating = [1, 2, 3, 4, 5];
    const range = this.props.range;
    const selectedValue = this.props.selectedValue;

    return(
      <aside id="filter">
        <h6 className="header-1">
          <i className="fas fa-filter"></i>
          Filters
        </h6>
          
        <div className="price-range">
          <span className="header-3">Price Range per <strong>night</strong></span>

          <InputRange
            formatLabel={value => `$${value}`}
            maxValue={range.max}
            minValue={range.min}
            value={selectedValue}
            onChange={this.changed} />

          <div className="left">
            <span>Min</span>
            <strong className="value">{selectedValue.min}</strong>
          </div>

          <div className="right">
            <span>Max</span>
            <strong className="value">{selectedValue.max}</strong>
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
