export function CityCard({title, imgUrl}) {
    return (
        <div>
            <div className="explore-locations">
                <div className="locaition-card">
                    <div className="img-container">
                        <img src={imgUrl} alt={title} />
                    </div>
                    <div className="content-container">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
