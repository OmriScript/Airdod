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
    hideSearch: '',
    hideTopSearch: 'hiden',
    bgc: ''
  }

  componentDidMount() {
    this.props.onSetCurrentPage('home')
    console.log('DDD', this.props.currentPage)
    this.props.getStays()
    
    window.onscroll = () => {
      if (this.props.currentPage === 'home') { 
        window.pageYOffset >= 150 ? document.body.classList.add('mini-header') : document.body.classList.remove('mini-header')
      }
    }
  }



  render() {
    const { hideSearch, hideTopSearch, isShown } = this.state
    return (
      <div className="app main-container" >
        <AppHeader isShown={isShown} hideTopSearch={hideTopSearch} hideSearch={hideSearch} />
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