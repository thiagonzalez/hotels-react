import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return(
      <div id="calendar">
        <h2 className="header-1">Select the dates to stay in Charlotte</h2>

        <form action="#">
          <div className="description">
            <div className="item">
              <span className="title">Check-in</span>
              <span data-first-date className="date">Choose a date</span>
            </div>

            <div className="item">
              <span className="title">Check-out</span>
              <span data-second-date className="date">Choose a date</span>
            </div>

            <button className="button button-inactive">Search hotels</button>
          </div>
            
          <div className="calendar">
            <input type="hidden" id="calendar-picker"/>
            <div id="calendar-picker-container"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calendar;
