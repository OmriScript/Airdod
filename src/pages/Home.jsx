import { CityCard } from '../cmps/CityCard'

export function Home() {
    return (
        <section className="stay-home">
            <div className="home-hero">1</div>
            <h2>Explore new places</h2>
            <CityCard title={'amsterdam'} imgUrl={'https://res.cloudinary.com/duhcvi6p4/image/upload/v1622299830/amsterdam-3410113_1920_aqdzxr.jpg'}/>
        </section>
    )
}