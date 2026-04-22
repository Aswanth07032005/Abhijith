import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import CustomNavbar from './components/CustomNavbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
 
  return (
  <BrowserRouter>
  <CustomNavbar/>
  <Routes>
  <Route path='/' element={<Hero/>} />
  
   
  </Routes>
  </BrowserRouter>
  )
}

export default App
