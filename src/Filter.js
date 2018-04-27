import React, { Component } from 'react';
import Rating from 'react-rating';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleCollectRatings = this.handleCollectRatings.bind(this);
    
    this.handleRangePrice = value => {
      const range = this.props.range;
      if ((value.min < range.min) || (value.max > range.max)) return;

      this.props.changePriceRange(value);
    }

    this.state = {
      rating: []
    }
  }

  handleCollectRatings(e) {
    const ratings = this.state.rating;
    let index;

    if (e.target.checked) {
      ratings.push(e.target.value);
    } else {
      index = ratings.indexOf(e.target.value);
      ratings.splice(index, 1);
    }

    this.setState({ rating: ratings });
    this.props.selectedRating(this.state);
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
            onChange={this.handleRangePrice} />

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
                <input id={"star-" + i} type="checkbox" className="rating-checkbox" name="rating[]" value={i} onChange={this.handleCollectRatings} />
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
