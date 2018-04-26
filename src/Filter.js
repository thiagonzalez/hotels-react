import React, { Component } from 'react';
import Rating from 'react-rating';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      minValue: 0, 
      maxValue: 600,
      selectedValue: {
        min: 0,
        max: 600
      }
    };
  }

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

          <InputRange
          formatLabel={value => `$${value}`}
            maxValue={this.state.maxValue}
            minValue={this.state.minValue}
            value={this.state.selectedValue}
            onChange={value => this.setState({ selectedValue: value })} />
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
