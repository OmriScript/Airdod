export function StayPreview({ stay }) {
    return (
        <section>
            <div className="stay-image-container">
                <img src={stay.imgUrls[0]} alt="house img" />
            </div>
            <h1>{stay.name}</h1>
            <p>{stay.price}</p>
        </section>
    )
}