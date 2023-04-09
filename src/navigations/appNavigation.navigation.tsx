import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard.pages';
import Home from '../pages/home/home.pages';
import MainNavigation from './mainNavigation.navigation';
const AppNavigation = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Dashboard/>} />
            
        </Routes>
    )
}

export default AppNavigation