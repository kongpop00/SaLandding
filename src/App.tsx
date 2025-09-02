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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
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
    </div>
  );
}

export default App;