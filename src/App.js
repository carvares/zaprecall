import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Quizz from './pages/quizz';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questions' element={<Quizz/>} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
