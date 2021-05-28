import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';

import { Component } from 'react'

export class DatePickerModal extends Component {
    state = {
        startDate: null,
        endDate: null
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
            </div>
        )
    }
}



