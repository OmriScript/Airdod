import { Link } from 'react-router-dom'
import { ImageCarousel } from './ImageCarousel'
import { ImageCarosuelM } from './ImageCarouselM'
import { StayRate } from './StayRate.jsx'
import { LongTxt } from './LongTxt.jsx';

export function StayPreview({ stay }) {
    // console.log('stay', stay);
    return (
        <section className="stay-preview">
            <Link to={`stay/${stay._id}`}>
                <div className="stay-image-container">
                    <ImageCarousel imgsSrc={stay.imgUrls} />
                    {/* <ImageCarosuelM imgsSrc={stay.imgUrls} /> */}
                </div>
                <p>{stay.type} in {stay.loc.country}</p>
                <div className="description">
                    {/* <h3>{stay.name}</h3> */}
                    <LongTxt txt={stay.summary} numOfChars={30} />
                    <ul className="clean-list flex">
                        {stay.amenities.map((amenity, idx) => {
                            return <li key={idx}>*{amenity}</li>
                        })}
                    </ul>
                    <div className="flex">
                        <StayRate stay={stay} isShowReviews={true} />
                        <p>${stay.price} / night</p>
                    </div>
                </div>
            </Link>
        </section>
    )
}