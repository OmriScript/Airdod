import './assets/styles/styles.scss'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
import { Try } from './cmps/Try'
import 'react-dates/initialize'

export class _App extends Component {
  render() {
    return (
      <div className="App main-container" >
        <AppHeader />
        <Try/>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: 'change me'
  }
}

export const App = connect(mapStateToProps)(_App)