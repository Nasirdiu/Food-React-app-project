import './App.css';
import Category from './components/Category';
import Food from './components/Food';
import Footer from './components/Footer';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ScrollToTops from './ScrollToTop/ScrollToTops';


function App() {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <HeadlineCards/>
        <Food/>
        <Category/>
        <Footer/>
        <ScrollToTops/>
    </div>
  );
}

export default App;
