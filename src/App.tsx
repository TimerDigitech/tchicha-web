import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Exercice from './components/exercices';
import Classe from './pages/classes.pages';
import Connexion from './pages/connexion.pages';
import Cours from './pages/cours.pages';
import Dashboard from './pages/dashboard.pages';
import DashHome from './pages/dashHome.pages';
import Groupes from './pages/groupes.pages';
import Historique from './pages/historique.pages';
import Home from './pages/home.pages';
import Inscription from './pages/inscription';
import Message from './pages/messages.pages';
import User from './pages/user.pages';
import GListe from './pages/groupesliste.pages';
import HomeOutlet from './pages/homeoutlet.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeOutlet />} >
          <Route path='' element={<Home />} />
          <Route path='groupes' element={<GListe />} />
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
