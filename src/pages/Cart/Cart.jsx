import React from 'react'
import CartItem from './CartItem/CartItem'
import { useSelector } from 'react-redux'
import { getCartData } from '../../features/cartSlice'
import './Cart.scss'

const Cart = () => {
  let cartData = useSelector(getCartData)
  let totalData = cartData.map((product) => (product.totalPrice))
  let total = totalData.reduce((acc, current) => (acc + current), 0)

  return (
    <div>
      <section className='cart-container'>
        <h2 className='title'>Shopping Cart</h2>
        <div className='cart-wrap'>
          {cartData.map((item) => (
            <CartItem item={item} key={item.item.id} />
          ))}
          {cartData.length === 0 && <p className='text-center'>無商品加入購物車</p>}
        </div>
        <div className='cart-checkout'>
          <p>總價格 : {total}</p>
          <button>結帳</button>
        </div>
      </section>
    </div>
  )
}

export default Cart