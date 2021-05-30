import './assets/styles/styles.scss'
import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { connect } from 'react-redux'
import { AppHeader } from './cmps/AppHeader'
import { Footer } from './cmps/Footer'
import { getStays } from './store/actions/stay.actions.js'

export class _App extends Component {
  state = {
    hideSearch: '',
    hideTopSearch: 'hiden',
    bgc: ''
  }

  componentDidMount() {
    this.props.getStays();
    window.onscroll = () => {
      if (window.pageYOffset >= 150) {
        this.setState({ hideSearch: 'hiden', hideTopSearch: '', bgc: 'white' })
        
      } else {
        this.setState({ hideSearch: '', hideTopSearch: 'hiden', bgc: '' })
      }
    }
  }

  onToggleSearchBar = () => {
    this.setState({ isShown: !this.state.isShown })
}

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    const {hideSearch, hideTopSearch, bgc} = this.state
    return (
      <div className="app main-container" >
        <AppHeader bgc={bgc} hideTopSearch={hideTopSearch} onToggleSearchBar={this.onToggleSearchBar} hideSearch={hideSearch}/>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = {
  getStays
}

export const App = connect(null, mapDispatchToProps)(_App)