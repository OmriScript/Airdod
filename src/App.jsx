import './assets/styles/styles.scss'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
// import { stayService } from './services/stay-service.js'
import { getStays } from './store/actions/stay.actions.js'

export class _App extends Component {

  componentDidMount() {
    this.props.getStays();
  }

  render() {
    const staysToShow = this.props.staysToShow
    console.log('staysToShow', staysToShow)
    if (!staysToShow) return 'Loading...'

    return (
      <div className="app main-container" >
        <AppHeader />
        <main>
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    staysToShow: state.stayModule.stays
  }
}

const mapDispatchToProps = {
  getStays
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)