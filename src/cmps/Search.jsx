import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class _Search extends Component {

    state = {
        startDate: '',
        endDate: '',
        filterBy: {
            country: '',
            guest: 0
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        const { filterBy } = this.state
        this.setState({ filterBy: { ...filterBy, [name]: value } })
    }

    onSubmitStay = ev => {
        ev.preventDefault()
        const { country, guest } = this.state.filterBy
        const { startDate, endDate } = this.state
        const filterBy = {
            startDate: startDate?._d || '',
            endDate: endDate?._d || '',
            country,
            guest
        }
        this.props.getStays(filterBy)
    }
    

    render() {
        const {onToggleSearchBar, hideSearch ,hideTopSearch} = this.props
        return (
            <section className={`stay-search flex align-center`}>
                <div className={`search-bar ${hideTopSearch}`} onClick={onToggleSearchBar}>
                    start search...
                <FontAwesomeIcon icon={faSearch} size="1x" />
                </div>
                <form
                    className={`flex ${hideSearch}`}
                    onSubmit={this.onSubmitStay}
                >
                    <div className="search-input country-input flex column justify-center">
                        <div className="location-label">
                            <label htmlFor="location">location</label>
                        </div>
                        <div className="country">
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                type="text"
                                name="country"
                                id="location"
                                placeholder="where do you want to go?" />
                        </div>
                    </div>
                    <div className="search-input date-input flex column justify-center">
                        <div className="dates-label">
                            <label>dates</label>
                        </div>
                        <DateRangePicker
                            startDateId="your_unique_start_date_id"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            endDateId="your_unique_end_date_id"
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                            startDatePlaceholderText="check in"
                            endDatePlaceholderText="check out"
                            noBorder
                            inputIconPosition="after"
                            small
                        />
                    </div>
                    <div className="search-input guest-input flex column justify-center">
                        <div className="guests-label">
                            <label htmlFor="guest">guests</label>
                        </div>
                        <div className="guest-input">
                            <input
                                onChange={this.handleChange}
                                autoComplete="off"
                                type="text"
                                name="guest"
                                id="guest"
                                placeholder="1 guest" />
                        </div>
                    </div>
                    <button className="primary-btn btn-grd">
                        <SearchIcon />
                    </button>
                </form>
            </section>
        )
    }
}



const mapDispatchToProps = {
    getStays
}

export const Search = connect(null, mapDispatchToProps)(_Search)