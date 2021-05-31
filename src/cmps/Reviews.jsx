import { Component } from 'react'
import { AvatarSymbol } from './AvatarSymbol.jsx'
import { StayRate } from './StayRate.jsx'

export class Reviews extends Component {

    render() {

        const { reviews, stay } = this.props
        const shortReviews = reviews.slice(0, 4)

        return (

            <div className="reviews-container">
                <StayRate
                    stay={stay}
                    isShowReviews={true} />
                <div>
                    {reviews && shortReviews.map(review => {
                        return <div className="review-container flex column">
                            <div className="review-writer-container flex align-center">
                                <div>
                                    <AvatarSymbol url={review.by.imgUrl} />
                                </div>
                                <div className="review-writer flex column">
                                    <span>{review.by.fullname}</span>
                                    <span>15.02.21</span>
                                </div>
                            </div>
                            <div>
                                <p>{review.txt}</p>
                            </div>
                        </div>
                    })}
                </div>
                {/* <button>Leave review</button> */}
            </div>
        )
    }
}