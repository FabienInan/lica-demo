import * as FaIcons from 'react-icons/fa';

import AirQuality from '../pages/AirQuality';
import Home from '../pages/Home';
import Weather from '../pages/Weather';
import env from 'react-dotenv';

export const SidebarData = [
    {
        title: 'Accueil',
        component: <Home/>,
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Météo',
        component: <Weather/>,
        path: '/weather',
        icon: <FaIcons.FaSun />
    },
    {
        title: 'Qualité de l\'air',
        component: <AirQuality/>,
        path: '/air-quality',
        icon: <FaIcons.FaAirFreshener />
    }
]

export const SidebarColor = env.PRIMARY_COLOR;
