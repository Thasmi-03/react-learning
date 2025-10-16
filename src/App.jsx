import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';


function App() {

  return (
    <>
    <div className='main'> 
      <Header/>
      <Footer/>
      <About/>
      <Home/>
    </div>
    </>
  )
}
export default App;
