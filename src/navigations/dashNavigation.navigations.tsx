import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cours from '../pages/cours.pages';
import Dashboard from '../pages/dashboard.pages';
import Groupes from '../pages/groupes.pages';
import Historique from '../pages/historique.pages';
import Home from '../pages/home.pages';
import Message from '../pages/messages.pages';
import User from '../pages/user.pages';
const DashNavigation = () => {
    return (
        <Routes>
            <Route path='/admin/user' element={<User />} />
            <Route path='/admin/message' element={<Message />} />
            <Route path='/admin/cours' element={<Cours />} />
            <Route path='/admin/historique' element={<Historique />} />
            <Route path='/admin/groupes' element={<Groupes />} />
        </Routes>
    )
}

export default DashNavigation