import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import Apply from './pages/apply/Apply';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='main-container'>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path='jobs/:id' element={<Jobs />} />
            <Route path='apply' element={<Apply />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
