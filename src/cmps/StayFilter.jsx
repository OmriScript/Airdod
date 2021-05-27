import { Component } from 'react'

export class StayFilter extends Component {

    state = {

    }

    render() {
        return (
            <section className="stay-filter flex">
                <form className="flex">
                    <div className="search-input flex column align-center justify-center">
                        <label htmlFor="location">location</label>
                        <div className="location">
                            <input autoComplete="off" type="text" name="search" id="location" placeholder="where do you want to go?" />
                        </div>
                    </div>
                    
                    <div className="search-input flex column align-center justify-center">
                        <label>dates</label>
                        <div className="date-container flex">
                            <div className="check-in flex">
                                <input autoComplete="off" type="text" name="search" id="dates" placeholder="check in" />
                            </div>
                            <div className="check-out">
                                <input autoComplete="off" type="text" name="search" id="dates" placeholder="check out" />
                            </div>
                        </div>
                    </div>
                    <div className="search-input flex column align-center justify-center">
                        <label htmlFor="guest">guests</label>
                        <div className="guest">
                            <input autoComplete="off" type="text" name="search" id="guest" placeholder="1 guest" />
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}
