import { NavLink } from 'react-router-dom'
import { Search } from './Search.jsx'

export function AppHeader({hideTopSearch, onToggleSearchBar, hideSearch, bgc}) {
    return (
        <header className={`flex justify-center ${bgc} full`}>
            <nav className="app-header flex ">
                <NavLink to="/"><h1 className="logo">AirDoD</h1></NavLink>
                <Search hideSearch={hideSearch} hideTopSearch={hideTopSearch} onToggleSearchBar={onToggleSearchBar}/>
                <ul className="clean-list flex">
                    <li ><NavLink to="/stay">Explore</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}