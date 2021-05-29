import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function StayRate({ stay, isShowReviews }) {
    const reviews = stay.reviews ? stay.reviews.length : 0
    let avgRate = stay.reviews ? stay.reviews.reduce((sum, obj) => {
        return sum + obj.rate;
    }, 0) / stay.reviews.length : 0
    
    if (avgRate % 1 !== 0) { // if decimal
        avgRate = avgRate.toFixed(2)
    }

    return (
        <section className='stay-rate flex'>
            <FontAwesomeIcon icon={faStar} />
            {avgRate} ({reviews}{isShowReviews ? ' reviews' : ''})
        </section>
    )
}