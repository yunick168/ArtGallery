import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SideNav from './components/SideNav/SideNav'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Artists from './pages/ArtistsPage/ArtistsPage'
import ArtistID from './pages/ArtistsPage/ArtistID/ArtistID'

const App = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <main className='main-container'>
        <Routes>
          <Route path="/ArtGallery/" element={<Home />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Cart' element={<Cart />}></Route >
          <Route path='/Artists' element={<Artists />}></Route >
          <Route path='/Artists/:id' element={<ArtistID />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App