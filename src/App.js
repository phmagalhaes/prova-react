import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dificuldades from './pages/Dificuldades';
import Enigmas from './pages/Enigmas';
import Enigma from './pages/Enigma';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/928_module01/front/' element={<Home />} />
        <Route path='/928_module01/front/dificuldades/' element={<Dificuldades />} />
        <Route path='/928_module01/front/enigmas/' element={<Enigmas />} />
        <Route path='/928_module01/front/enigmas/show/' element={<Enigma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
