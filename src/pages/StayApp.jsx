import { Component } from 'react'
import { connect } from 'react-redux'
import { StayList } from '../cmps/StayList.jsx'
import { StayFilter } from '../cmps/StayFilter.jsx'
import { getStays, onSetCurrentPage } from '../store/actions/stay.actions.js'

export class _StayApp extends Component {

    componentDidMount() {
        this.props.onSetCurrentPage('stayapp')
        window.scrollTo(0, 0)
    }

    render() {
        const { stays } = this.props
        if (!stays) return <h1>reloading</h1>


        return (
            <section className="stay-app">
                <StayFilter />
                <StayList stays={stays} />
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        stays: state.stayModule.stays
    }
}

const mapDispatchToProps = {
    getStays,
    onSetCurrentPage
}

export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)