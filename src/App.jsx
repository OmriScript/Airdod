import './assets/styles/styles.scss'
<<<<<<< HEAD
import 'react-dates/initialize'

=======
>>>>>>> d6524b2f73e295cb841aaa1f3341375b81cab3f4
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
import { getStays } from './store/actions/stay.actions.js'

export class _App extends Component {

  componentDidMount() {
    this.props.getStays();
  }

  render() {
    return (
      <div className="app main-container" >
        {/* <AppHeader /> */}
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  }
}

const mapDispatchToProps = {
  getStays
}

export const App = connect(null, mapDispatchToProps)(_App)