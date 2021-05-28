import 'react-dates/initialize'
import { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { DatePickerModal } from './DatePickerModal'

export class Search extends Component {

    state = {

    }

    render() {
        return (
            <section className="stay-filter flex">
                <form className="flex">
                    <div className="search-input flex column ">
                        <div className="location-label">
                            <label htmlFor="location">location</label>
                        </div>
                        <div className="location">
                            <input autoComplete="off" type="text" name="search" id="location" placeholder="where do you want to go?" />
                        </div>
                    </div>
                    <div className="search-input flex column ">
                        <div className="dates-label">
                            <label>dates</label>
                        </div>
                        <div className="date-container flex">
                            <div className="check-in flex">
                                <input 
                                autoComplete="off" 
                                type="text" 
                                name="search" 
                                id="dates" 
                                placeholder="check in" />
                            </div>
                            <div className="check-out">
                                <input 
                                autoComplete="off" 
                                type="text" name="search" 
                                id="dates" 
                                placeholder="check out" />
                            </div>
                        </div>
                    </div>
                    <div className="search-input flex column">
                        <div className="guests-label">
                            <label htmlFor="guest">guests</label>
                        </div>
                        <div className="guest-input">
                            <input
                                autoComplete="off"
                                type="text" name="search"
                                id="guest"
                                placeholder="1 guest" />
                        </div>
                    </div>
                    <button className="primary-btn btn-grd">
                        <SearchIcon />
                    </button>
                </form>
                <DatePickerModal />
            </section>
        )
    }
}