import './App.css';
import Home from './components/homePage/Home';
import FourthPage from './components/fourthPage/FourthPage';
import SecondPage from './components/secondPage/SecondPage';
import ThirdPage from './components/thirdPage/ThirdPage';
import FifthPage from './components/fifthPage/FifthPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Home />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <Footer />
    </div>
  );
}

export default App;
