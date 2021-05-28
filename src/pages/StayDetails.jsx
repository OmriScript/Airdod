import { Component } from 'react'
import StarRate from '@material-ui/icons/StarRate'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

export class StayDetails extends Component {



    render() {
        return (
            <section className="stay-details-container">
                <div className="details-header-container">
                    <h1>Ono Home Base</h1>
                    <div>
                        <StarRate />
                        <span className="details-header-rate">5.0</span>
                        <span className="details-header-reviwes">(14 reviwes)</span>
                        <span className="details-header-dot">·</span>
                        <span className="details-header-tags">Kiryat Ono, Tel Aviv District, Israel</span>
                        <button className="details-header-save">
                            <FavoriteBorder />
                            Save
                        </button>
                    </div>
                </div>
                <div className="details-gallery">

                </div>
            </section>
        )
    }
}
