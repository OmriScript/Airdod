import { NavLink } from 'react-router-dom'

export function AppHeader() {
    return (
        <nav className="app-header flex justify-space-between">
            <NavLink to="/"><h1 className="logo">Logo</h1></NavLink>
            <ul className="clean-list flex">
                <li ><NavLink to="/stay">Explore</NavLink></li>
            </ul>
        </nav>
    )
}