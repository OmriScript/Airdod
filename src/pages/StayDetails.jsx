import { Component } from 'react'
import { stayService } from '../services/stay-service'
import { AssetDetails } from '../cmps/AssetDetails.jsx'
import { StayRate } from '../cmps/StayRate.jsx'
import { AvatarSymbol } from '../cmps/AvatarSymbol.jsx'
import { StayBookModal } from '../cmps/StayBookModal.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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
        this.setState({ stay })
    }

    render() {

        const { stay } = this.state
        const {
            loc,
            name,
            type,
            host,
            imgUrls,
            capacity,
            houseRules
        } = stay

        if (!stay) return <h1>reloading</h1>

        return (
            <section className="stay-details-container">
                <div className="details-header-container">
                    <h1>{name}</h1>
                    <div className="details-header-details flex justify-space-between">
                        <div className="details-header-desc flex">
                            <StayRate
                                stay={stay}
                                isShowReviews={true}
                            />
                            <span className="details-header-dot">·</span>
                            {loc && <span className="details-header-tags">
                                {loc.address}</span>}
                        </div>
                        <button className="details-header-save flex align-center">
                            <FontAwesomeIcon icon={faHeart} />
                            Save
                        </button>
                    </div>
                </div>

                {imgUrls && <div className="details-gallery-container">{
                    imgUrls.map((imgUrl, idx) => {
                        return <div key={idx} className={`details-img-container img-${idx + 1}`}>
                            <img src={imgUrl} />
                        </div>
                    })
                }</div>}

                <section className="host-main-container justify-space-between flex">
                    <div className="flex full column">
                        {host && <div className="host-header-container flex">
                            <div className="flex column full">
                                <h2>{type} hosted by {host.fullname}</h2>
                                <span className="host-header-capacity">Up to {capacity} guests</span>
                            </div>
                            <div>
                                <AvatarSymbol />
                            </div>
                        </div>}
                        <div className="asset-details-container">
                            {houseRules && <AssetDetails
                                type={type}
                                houseRules={houseRules}
                            />}
                        </div>
                    </div>
                    <div className="staybook-modal-container ">
                        <StayBookModal stay={stay} />
                    </div>
                </section>
            </section>
        )
    }
}