import { NavLink } from 'react-router-dom'
import { StayFilter } from './StayFilter'

export function AppHeader() {
    return (
        <header>
            <nav className="app-header flex justify-space-between">
                <NavLink to="/"><h1 className="logo">Logo</h1></NavLink>
                <StayFilter />
                <ul className="clean-list flex">
                    <li ><NavLink to="/stay">Explore</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}