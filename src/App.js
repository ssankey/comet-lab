import './App.css';
import ContactForm from './components/contactForm';
import Banner from './components/banner';
import Iframe from './components/iframe';
import Reviews from './components/Reviews';
import Cards from './components/Cards';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Banner/>
        <ContactForm/>
        <Iframe/>
        <Reviews/>
        <Cards/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
