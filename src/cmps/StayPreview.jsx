import { Link } from 'react-router-dom'
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
                <h1>{stay.name}</h1>
                <p>{stay.price}</p>
            </Link>
        </section>
    )
}