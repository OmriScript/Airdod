import { Component } from 'react'
import { stayService } from '../services/stay-service'
import { AssetDetails } from '../cmps/AssetDetails.jsx'
import { AvatarSymbol } from '../cmps/AvatarSymbol.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

export class StayDetails extends Component {

    state = {
        stay: {}
    }

    componentDidMount() {
        this.setStayDetails()
    }

    async setStayDetails() {
        const { id } = this.props.match.params
        let stay = await stayService.getById(id)
        if (stay.reviews) stay.reviewsAvg = this.calcReviewsAvg(stay)
        this.setState({ stay })
    }

    calcReviewsAvg = (stay) => {
        
        let reviews = stay.reviews
        let total = 0;
        for (let i = 0; i < reviews.length; i++) {
            total += reviews[i].rate;
        }
        return (total / reviews.length).toFixed(2);
    }

    render() {
        const img1 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg'
        // const img2 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg'
        // const img3 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg'
        // const img4 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg'
        // const img5 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg'
        if (!this.state.stay) return <h1>reloading</h1>

        const {
            reviewsAvg,
            reviews,
            loc,
            name,
            type,
            host,
            capacity,
            houseRules
        } = this.state.stay

        return (
            <section className="stay-details-container">
                <div className="details-header-container">
                    <h1>{name}</h1>
                    <div>
                        <FontAwesomeIcon icon={faStar} />
                        {reviewsAvg ? <span className="details-header-rate">
                            {reviewsAvg}</span> : <span>Be the first reviewer</span>}
                        {reviews && <span className="details-header-reviwes">
                            ({reviews.length})Reviews
                            </span>}
                        <span className="details-header-dot">·</span>
                        {loc && <span className="details-header-tags">
                            {loc.address}</span>}
                        <button className="details-header-save">
                            <FontAwesomeIcon icon={faHeart} />
                            Save</button>
                    </div>
                </div>
                {/* <div className="details-gallery-container"></div> */}

                {host && <div className="host-header-container">
                    <h2>{type} hosted by {host.fullname}</h2>
                    <span className="host-header-capacity">Up to {capacity} guests</span>
                    <AvatarSymbol />
                </div>}

                {houseRules && <AssetDetails
                    type={type}
                    houseRules={houseRules} />}
            </section>
        )
    }
}