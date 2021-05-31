import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css';
import { Component } from 'react'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import { getStays, onSetCurrentPage } from '../store/actions/stay.actions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class _Search extends Component {

    state = {
        isShown: true,
        filterBy: {
            country: '',
            guest: 0
        }
    }

    componentDidMount(){
        // console.log('DDD', this.props)
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
            guest: +guest
        }
        this.props.getStays(filterBy)
    }

    onToggleSearchBar = () => {
        this.setState({ isShown: !this.state.isShown})
      }
    

    render() {
        const { hideSearch ,hideTopSearch, currentPage} = this.props
        return (
            <section className={`stay-search flex align-center `}>
                <div className={`search-bar hidden`} onClick={this.onToggleSearchBar}>
                    start search...
                <FontAwesomeIcon icon={faSearch} />
                </div>
                {this.state.isShown&&<form
                    className={`flex`}
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
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>}
            </section>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentPage: state.stayModule.currentPage
    }
}

const mapDispatchToProps = {
    getStays,
    onSetCurrentPage
}

export const Search = connect(mapStateToProps, mapDispatchToProps)(_Search)