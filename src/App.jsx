import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/contact';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Header/>

    <div className='main px-6'> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
      <Footer/>

    </>
  )
}
export default App;
