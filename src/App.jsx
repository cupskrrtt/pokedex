import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PokemonPage from './pages/PokemonPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={`/`}
          element={<PokemonPage />}
        />
        <Route
          path="/detail/:pokemon"
          element={<DetailPage />}
        />
      </Routes>
    </>
  );
}

export default App;
