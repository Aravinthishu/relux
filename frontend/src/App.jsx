import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './Components/Header'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Location from './pages/Location/Location'
import Business from './pages/Business/Business'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blogs/Blog'
import Not_found from './pages/Not_found/Not_found'
import Franchise from './pages/Franchise/Franchise'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/business' element={<Business/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blog/>}/>
          <Route path='/franchise' element={<Franchise/>}/>
          <Route path='*' element={<Not_found/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
