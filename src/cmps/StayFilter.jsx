import { Component } from 'react'

export class StayFilter extends Component {

    state = {

    }

    render() {
        return (
            <section>
                <form className="flex align-center justify-center">
                    <div className="search-input flex column">
                        <label htmlFor="location">location</label>
                        <input type="text" name="search" id="location" placeholder="where do you want to go?" />
                    </div>
                    <div className="search-input flex column">
                        <label>dates</label>
                        <div className="date-container flex">
                            <input type="text" name="search" id="dates" placeholder="check in" />
                            <span>|</span>
                            <input type="text" name="search" id="dates" placeholder="check out" />
                        </div>
                    </div>
                    <div className="search-input">
                        <label htmlFor="guest">guests</label>
                        <input type="text" name="search" id="guest" placeholder="1 guest" />
                    </div>
                </form>
            </section>
        )
    }
}
