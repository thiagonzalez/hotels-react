import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { format, differenceInCalendarDays } from 'date-fns';
import 'react-day-picker/lib/style.css';

function formatDateDisplay(date, defaultText) {
  if (!date) return defaultText;
  return (
    <span>
      {format(date, 'MMMM ')}
      <strong>{format(date, 'D')}</strong>
      {format(date, ', YYYY')}
    </span>
  );
}

class Calendar extends Component {
  static defaultProps = { numberOfMonths: 1 }

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      numberOfNights: undefined
    };
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
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    return(
      <div id="calendar">
        <h2 className="header-1">Select the dates to stay in Charlotte</h2>
          
        <div className="calendar">
          <DayPicker
            numberOfMonths={this.props.numberOfMonths}
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
            <span className="date">{formatDateDisplay(from, 'Choose a Date')}</span>
          </div>

          <div className="item">
            <span className="title">Check-out</span>
            <span className="date">{formatDateDisplay(to, 'Choose a Date')}</span>
          </div>

          <button className="button button-inactive">Search hotels</button>
        </div>
      </div>
    );
  }
}

export default Calendar;
