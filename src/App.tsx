import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='jobs/:id' element={<Jobs />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
