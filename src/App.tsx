import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Profile from './components/Profile';

// Main landing page component
const LandingPage = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Reviews />
        <Awards />
        <FAQ />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;