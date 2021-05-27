import './assets/styles/styles.scss'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
<<<<<<< HEAD
import { Try } from './cmps/Try'
import 'react-dates/initialize'
=======
// import { stayService } from './services/stay-service.js'
import { getStays } from './store/actions/stay.actions.js'
>>>>>>> 39c09b98a21fbc2c7dc4b6992eac5381c4aa54c3

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
<<<<<<< HEAD
        <Try/>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
=======
        <main>
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
>>>>>>> 39c09b98a21fbc2c7dc4b6992eac5381c4aa54c3
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