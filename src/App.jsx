import './assets/styles/styles.scss'
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
import { getStays, onSetCurrentPage } from './store/actions/stay.actions.js'

export class _App extends Component {
  state = {
    // isShown: true
  }

  componentDidMount() {
    this.props.onSetCurrentPage('home')
    this.props.getStays()
    console.log('RRR', this.props.currentPage)

    if (this.props.currentPage !== 'home') {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
    window.onscroll = () => {
      if (this.props.currentPage === 'home') {
        window.pageYOffset >= 150 ? document.body.classList.add('mini-header') : document.body.classList.remove('mini-header')
      }
    }
  }

  onToggleSearchBar = () => {
    this.setState({ isShown: !this.state.isShown }, () => console.log(this.state))
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const { isShown } = this.state
    return (
      <div className="app main-container" >
        <AppHeader isShown={isShown} onToggleSearchBar={this.onToggleSearchBar} />
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { currentPage } = state.stayModule
  return {
    currentPage
  }
}

const mapDispatchToProps = {
  getStays,
  onSetCurrentPage
}

export const App = connect(mapStateToProps, mapDispatchToProps)(_App)