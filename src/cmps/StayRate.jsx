import StarRate from '@material-ui/icons/StarRate'

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
            <StarRate style={{ color: 'rgba(111, 52, 250, 1)' }} />
            {avgRate} ({reviews}{isShowReviews ? ' reviews' : ''})
        </section>
    )
}