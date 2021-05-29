import { CityCard } from '../cmps/CityCard'
import { connect } from 'react-redux'
import { getStays } from '../store/actions/stay.actions.js'
import { StayList } from '../cmps/StayList'

function _Home({ stays }) {
    const filterStays = stays.slice(0, 4)

    return (
        <section className="stay-home main-container full">
            <div className="home-hero full"></div>
            <h2>Explore new places</h2>
            <div className="city-card-container">
                <CityCard title={'amsterdam'} imgUrl={'amsterdam_nqxozm'} />
                <CityCard title={'paris'} imgUrl={'paris_lljj5s'} />
                <CityCard title={'new-york'} imgUrl={'new-york_en6f3a'} />
                <CityCard title={'tokyo'} imgUrl={'tokyo_cl5jez'} />
                <CityCard title={'london'} imgUrl={'london_ddezqi'} />
                <CityCard title={'barcelona'} imgUrl={'barcelona_aq6xpb'} />
            </div>
            <div className="best-loc justify-center flex">
                <StayList stays={filterStays}/>
            </div>
            <div className="become-host">
                <h2>become a host</h2>
            </div>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    getStays
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
