import '../css/App.css'
import GameCard from './components/MovieCard';
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/favorites" element={<Favorites></Favorites>}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
