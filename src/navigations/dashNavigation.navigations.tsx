import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cours from '../pages/cours/cours.pages';
import Dashboard from '../pages/dashboard/dashboard.pages';
import Groupes from '../pages/groupes/groupes.pages';
import Historique from '../pages/historique/historique.pages';
import Home from '../pages/home/home.pages';
import Message from '../pages/message/messages.pages';
import User from '../pages/user/user.pages';
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