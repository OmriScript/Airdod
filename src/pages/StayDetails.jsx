import { Component } from 'react'
import { stayService } from '../services/stay-service'

import StarRateIcon from '@material-ui/icons/StarRate'
import HeartIcon from '@material-ui/icons/FavoriteBorder'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles';

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
        // stay.reviewsAvg = this.calcReviewsAvg(stay)
        console.log('GOT:', stay)
        this.setState({ stay })
    }

    // calcReviewsAvg = (stay) => {
    //     let reviews = stay.reviews
    //     let total = 0;
    //     for (let i = 0; i < reviews.length; i++) {
    //         total += reviews[i].rate;
    //     }
    //     return total / reviews.length;
    // }

    render() {
        const img1 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning2_fzcrtp.jpg'
        // const img2 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning3_p8fxak.jpg'
        // const img3 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning4_fktfrf.jpg'
        // const img4 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning1_fj7sai.jpg'
        // const img5 = 'https://res.cloudinary.com/ariecloud/image/upload/v1606584668/users/londoning5_sgfmv5.jpg'
        if (!this.state.stay) return <h1>reloading</h1>
        const {
            // reviewsAvg,
            reviews,
            loc,
            name,
            type,
            host
        } = this.state.stay

        // console.log('GOT:', this.state.stay)

        return (
            <section className="stay-details-container">
                <div className="details-header-container">
                    <h1>{name}</h1>
                    <div>
                        <StarRateIcon />
                        {/* <span className="details-header-rate">
                            {reviewsAvg}</span> */}
                        {reviews && <span className="details-header-reviwes">
                            ({reviews.length})Reviews
                            </span>}
                        <span className="details-header-dot">·</span>
                        <span className="details-header-tags">
                            {loc && loc.address}</span>
                        <button className="details-header-save">
                            <HeartIcon />
                            Save</button>
                    </div>
                </div>
                {/* <div className="details-gallery-container"></div> */}
                {/* <Avatar>554</Avatar> */}
                <div className="host-header-container">
                    <h2>
                        {type} hosted by {host && host.fullname}</h2>

                </div>
            </section>
        )
    }
}

