import React from 'react'
import './side-nav.scss'
// Router
import { Link } from 'react-router-dom';
// Redux
import { getActive, activeMenu } from '../../features/menuSlice'
import { useSelector, useDispatch } from 'react-redux';
// Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SideNav = () => {
  let dispatch = useDispatch()
  let active = useSelector(getActive)
  return (
    <section>
      <div
        className={`side-nav shadow-md
          ${active === true ? `-translate-x-full` : `translate-x-0`} md:-translate-x-full
        `}
      >
        <Links />
        <SocialMedia />
      </div >
      <div
        onClick={() => dispatch(activeMenu(!active))}
        className={`side-nav-bg  ${active === true ? 'hidden' : 'block'} md:hidden`}>
      </div>
    </section>
  )
}

const Links = () => {
  return (
    <nav className='side-nav-wrap'>
      <Link to="/ArtGallery/">首頁</Link>
      <Link to="Products">畫廊</Link>
      <Link to="Artists">藝術家</Link>
    </nav>
  )
}

const SocialMedia = () => {
  return (
    <div className='side-nav-social-media-wrap'>
      <a href='/'><FacebookIcon sx={{ fontSize: 25 }} /></a>
      <a href='/'><TwitterIcon sx={{ fontSize: 25 }} /></a>
      <a href='/'><InstagramIcon sx={{ fontSize: 25 }} /></a>
    </div>
  )
}

export default SideNav