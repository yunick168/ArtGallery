import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getActive, activeMenu } from '../../features/menuSlice'
import { getCartCount } from '../../features/cartSlice'


const Navbar = () => {
  // scroll
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor)

  return (
    <>
      <motion.nav
        className='navbar shadow-md'
        style={{ backgroundColor: `${color === true ? '#ddd' : '#f3f4f6'}` }}
      >
        <MenuBtn />
        <h2 className='logo'>ART GALLERY</h2>
        <Links />
        <Cart />
      </motion.nav>
      <div style={{ height: 60 }}></div>
    </>
  )
}

const MenuBtn = ({ color }) => {
  const dispatch = useDispatch()
  const active = useSelector(getActive)

  return (
    <button
      onClick={() => dispatch(activeMenu(!active))}
      className='menu-btn text-white'
      style={{ color: `${color === true ? '#fff' : '#333'}` }}
    >
      <MenuIcon />
    </button>
  )
}

const Links = () => {
  return (
    <div className='nav-wrap'
    >
      <Link to="/ArtGallery">首頁</Link>
      <Link to="Products">畫廊</Link>
      <Link to="Artists">藝術家</Link>
    </div>
  )
}

const Cart = () => {
  let cartCount = useSelector(getCartCount)
  return (
    <Link
      to="/Cart"
      className="cart-btn"
    >
      <span>{cartCount}</span>
      < ShoppingCartIcon />
    </Link >
  )
}

export default Navbar