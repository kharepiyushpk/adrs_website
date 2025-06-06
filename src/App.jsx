import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Our_Team from './pages/Our_Team'
import Our_Mission from './pages/Our_Mission'
import Product  from './pages/Product'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CareerD from './components/Career';
import CareerForm from './components/CareerForm';


const App = () => {
  return (
 <>
 
 <Navbar />
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />   
  <Route path="/services" element={<Services />} />
  <Route path="/our-team" element={<Our_Team />} />
  <Route path="/our-mission" element={<Our_Mission />} />
  <Route  path="/product" element={<Product />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/career-form" element={<CareerForm />} />
  <Route path="/career" element={<CareerD />} />

 </Routes>
 <Footer/>
 
 </>
  )
}

export default App