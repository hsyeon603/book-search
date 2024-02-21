import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Detail from './routes/Detail.jsx';
import './styles/main.scss';

export default function App() {
  return (
    <>
      <img className="logo" src="/src/assets/images/logo_no-background.png" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}
