import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';
import './styles/main.scss';
import Recommend from './routes/Recommend.jsx';

export default function App() {
  return (
    <>
      <img className="logo" src="/src/assets/images/logo_no-background.png" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </Router>
    </>
  );
}
