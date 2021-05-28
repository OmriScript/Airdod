import { Link } from 'react-router-dom'
import StarRate from '@material-ui/icons/StarRate'
import { ImageCarousel } from './ImageCarousel'
import { ImageCarosuelM } from './ImageCarouselM'

export function StayPreview({ stay }) {
    return (
        <section className="stay-preview">
            <Link to={`stay/${stay._id}`}>
                <div className="stay-image-container">
                    <ImageCarousel imgsSrc={stay.imgUrls} />
                    {/* <ImageCarosuelM imgsSrc={stay.imgUrls} /> */}
                </div>
                <div className="description">
                    <p className='flex'>
                        <StarRate style={{ color: 'rgba(111, 52, 250, 1)' }} />
                        rate (num of review)
                    </p>


                    <h3>{stay.name}</h3>
                    <p>${stay.price} / night</p>
                    <h3>{stay.summary}</h3>
                </div>
            </Link>
        </section>
    )
}