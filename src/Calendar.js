import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return(
      <div id="calendar">
        <h2 class="header-1">Select the dates to stay in Charlotte</h2>

        <form action="#">
          <div class="description">
            <div class="item">
              <span class="title">Check-in</span>
              <span data-first-date class="date">Choose a date</span>
            </div>

            <div class="item">
              <span class="title">Check-out</span>
              <span data-second-date class="date">Choose a date</span>
            </div>

            <button class="button button-inactive">Search hotels</button>
          </div>
            
          <div class="calendar">
            <input type="hidden" id="calendar-picker"/>
            <div id="calendar-picker-container"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calendar;
