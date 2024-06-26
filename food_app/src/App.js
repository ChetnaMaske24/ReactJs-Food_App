import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/menu' exact element={<Menu />}/>
          <Route path='/about' exact element={<About />}/>
          <Route path='/contactUs' exact element={<ContactUs />}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
