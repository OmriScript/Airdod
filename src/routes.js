import { Home } from './pages/Home.jsx'
import { StayApp } from './pages/StayApp.jsx'
import { StayDetails } from './pages/StayDetails.jsx'

export const routes = [
    {
        path: '/stay/:id',
        component: StayDetails,
    },
    {
        path: '/stay',
        component: StayApp,
    },
    {
        path: '/',
        component: Home,
    },
]