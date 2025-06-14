import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Routes berikut nanti kita tambahin Clubs dan ClubDetail */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
