export function CityCard({ title, imgUrl }) {
    return (
        <div className={` ${title}-card card`}>
            <div className="img-container">
                <img src={`https://res.cloudinary.com/duhcvi6p4/image/upload/v1622304703/${imgUrl}.jpg`} alt="" />
            </div>
            <div className={`bg-filter ${title}`}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
