import Carousel from './Carousel'
import './Header.scss'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className='header container'>
      <Carousel />
      <Info />
    </header >
  )
}

const Info = () => {
  return (
    <div
      className='header-info'
    >
      {
        ['ART', 'GALLERY', 'IS', 'BEST'].map((item, index) => (
          <motion.p
            className='w-0'
            key={index}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              delay: `${0.5 + index}`
            }}
          >
            {item}
          </motion.p>
        ))
      }
    </div >
  )
}

export default Header