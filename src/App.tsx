import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Exercice from './components/exercices';
import Classe from './pages/classe/classes.pages';
import Connexion from './pages/connexion/connexion.pages';
import Cours from './pages/cours/cours.pages';
import Dashboard from './pages/dashboard/dashboard.pages';
import DashHome from './pages/dashhome/dashHome.pages';
import Groupes from './pages/groupes/groupes.pages';
import Historique from './pages/historique/historique.pages';
import Home from './pages/home/home.pages';
import Inscription from './pages/connexion/inscription';
import Message from './pages/message/messages.pages';
import User from './pages/user/user.pages';
import GListe from './pages/groupes/groupesliste.pages';
import HomeOutlet from './pages/homeoutlet/homeoutlet.page';
import CListe from './pages/cours/coursliste';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeOutlet />} >
          <Route path='' element={<Home />} />
          <Route path='groupes' element={<GListe />} />
          <Route path='cours' element={<CListe />} />
          <Route path='contacts' element={<Contact />} />
          </Route>
          <Route path='/exo' element={<Exercice />} />
          <Route path='/classe' element={<Classe />} />
          <Route path='/inscription' element={<Inscription />} />
          <Route path='/connexion' element={<Connexion />} />
          <Route path='/admin' element={<Dashboard />}>
          <Route path='' element={<DashHome />} />
          <Route path='user' element={<User />} />
          <Route path='message' element={<Message />} />
          <Route path='cours' element={<Cours />} />
          <Route path='historique' element={<Historique />} />
          <Route path='groupes' element={<Groupes />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
