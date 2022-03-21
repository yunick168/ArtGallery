import React, { useState } from 'react'
import './Product.scss'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../features/cartSlice'
import { getCartData } from '../../../features/cartSlice'

const Product = ({ item }) => {
  // 數量
  const [quantity, setQuantity] = useState(1)
  // 抓參數
  let dispatch = useDispatch()
  let cartData = useSelector(getCartData)

  //加入購物車
  const addCartHandle = () => {
    let data = cartData.map((product) => {
      return product.item.id === item.id
    })
    if (data.includes(true)) return alert('商品已經在購物車')
    dispatch(addCart({ item, quantity }))
    setQuantity(1)
  }

  return (
    <motion.div className='product'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img
        className='product-image'
        src={item.image}
        alt={item.name}
      />
      <Info
        name={item.name}
        price={item.price}
        artist={item.artist}
      />
      <Quantity
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <button
        onClick={() => addCartHandle()}
        className='product-add-cart-btn'
      >
        加入購物車
      </button>
    </motion.div >
  )
}

const Info = ({ name, price, artist }) => {
  return (
    <section className='product-info'>
      <div>
        <p>作者</p>
        <span>{artist}</span>
      </div>
      <div>
        <p>作品</p>
        <span>{name}</span>
      </div>
      <div>
        <p>價格</p>
        <span>${price}</span>
      </div>
    </section>
  )
}

const Quantity = ({ quantity, setQuantity }) => {

  const countHandle = (num) => {
    let count = quantity + num
    setQuantity(count < 1 ? 1 : count)
  }

  return (
    <div className='product-quantity'>
      <button onClick={() => countHandle(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => countHandle(1)}>+</button>
    </div>
  )
}

export default Product