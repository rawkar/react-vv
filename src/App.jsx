import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Facebook from './pages/Facebook';
import Instagram from './pages/Instagram';
import LinkedIn from './pages/Linkedin';
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <div>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/linkedin" element={<LinkedIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
