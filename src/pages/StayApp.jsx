import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StayList } from '../cmps/StayList.jsx'
import { StayFilter } from '../cmps/StayFilter.jsx'
import { getStays } from '../store/actions/stay.actions.js'


export class _StayApp extends Component {
    render() {
        const stays = this.props.stays
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
    getStays
}

export const StayApp = connect(mapStateToProps, mapDispatchToProps)(_StayApp)