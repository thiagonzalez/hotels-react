import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { differenceInCalendarDays } from 'date-fns';
import 'react-day-picker/lib/style.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      from: undefined,
      to: undefined,
      numberOfNights: undefined
    }
  }

  handleButtonClick() {
    this.props.changeDateRange(this.state);
    this.props.showResults();
  }

  handleDayClick(day, modifiers = {}) {
    if (modifiers.disabled) return;

    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);

    if (range.from && range.to) {
      this.setState({ 
        numberOfNights: differenceInCalendarDays(range.to, range.from)
      });
    }
  }

  render() {
    const { from, to, numberOfNights } = this.state;
    const modifiers = { start: from, end: to };

    return(
      <div id="calendar">
        <h2 className="header-1">Select the dates to stay in Charlotte</h2>
          
        <div className="calendar">
          <DayPicker
            numberOfMonths={1}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            showOutsideDays={true}
            enableOutsideDaysClick={false}
            disabledDays={{ before: new Date()}}
          />
        </div>

        <div className="description">
          <div className="item">
            <span className="title">Check-in</span>
            <span className="date">{this.props.formatDateDisplay(from, 'Choose a Date')}</span>
          </div>

          <div className="item">
            <span className="title">Check-out</span>
            <span className="date">{this.props.formatDateDisplay(to, 'Choose a Date')}</span>
          </div>

          <button 
            className="button" 
            onClick={this.handleButtonClick} 
            disabled={!numberOfNights}>
              Search hotels
          </button>
        </div>
      </div>
    );
  }
}

export default Calendar;
