import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';
import './styles/main.scss';
import Recommend from './routes/Recommend.jsx';
import logo from './assets/images/logo-color.png';

export default function App() {
  return (
    <>
      <Router basename="/bookbti">
        <Link to={'/'}>
          <div className="logo-container">
            <img className="logo" src={logo} alt="bookbti logo" />
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/recommend" element={<Recommend />} />
        </Routes>
      </Router>
    </>
  );
}
