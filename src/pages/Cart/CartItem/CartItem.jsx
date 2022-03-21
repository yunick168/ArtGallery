import React from 'react'
import './CartItem.scss'
import { deleteCartItem, getCartData, changeCartData } from '../../../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({ item }) => {
  let product = item.item
  let dispatch = useDispatch()
  let cartData = useSelector(getCartData)

  const clickHandle = (product, num) => {
    let copyCartData = [...cartData]
    let findProduct = copyCartData.find((item) => item.item.id === product.item.id)
    let findProductIndex = copyCartData.indexOf(findProduct)
    let findQuantity = findProduct.quantity
    let quantity = findQuantity + num
    console.log(quantity);
    if (quantity < 1) return
    copyCartData.splice(findProductIndex, 1, { item: product.item, quantity: quantity, totalPrice: product.item.price * quantity })
    dispatch(changeCartData(copyCartData))
  }

  return (
    <div className='cart-item'>
      {/* 圖片 */}
      <img src={product.image} alt={product.name} />

      {/* 訊息 */}
      <div className='cart-item-info'>
        <span>作品</span>
        <p>{product.name}</p>
        <span>數量</span>
        <div className='cart-item-count'>
          <button onClick={() => clickHandle(item, -1)}> - </button>
          <span>{item.quantity}</span>
          <button onClick={() => clickHandle(item, 1)}> + </button>
        </div>
        <span>價格</span>
        <p>{product.price}</p>
      </div>

      {/* 總價 */}
      <div className='cart-item-total'>
        <p>總價</p>
        <p>${item.totalPrice}</p>
      </div>

      {/* 刪除 */}
      <button
        onClick={() => dispatch(deleteCartItem(product.id))}
        className='cart-item-delete'
      >
        delete
      </button>
    </div >
  )
}

export default CartItem