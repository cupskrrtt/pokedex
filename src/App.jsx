import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PokemonCard />}
        />
        <Route
          path="/detail/:pokemon"
          element={<PokemonDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
