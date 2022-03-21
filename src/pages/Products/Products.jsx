import React from 'react'
import Filter from './Filter/Filter'
import Product from './Product/Product'
import './products.scss'
import { productData } from '../../db/productData'
import { getArtistValue, getCategoryValue, getPriceSortValue } from '../../features/filterSlice'
import { useSelector } from 'react-redux'

const Products = () => {
  let artistValue = useSelector(getArtistValue)
  let categoryValue = useSelector(getCategoryValue)
  let priceSortValue = useSelector(getPriceSortValue)

  const artistData = productData.filter((item) => {
    if (artistValue === '全部') return true
    return item.artist === artistValue
  })

  const categoryData = artistData.filter((item) => {
    if (categoryValue === '全部') return true
    return item.category === categoryValue
  })

  const priceSortData = categoryData.sort((a, b) => {
    if (priceSortValue === 0) return
    else if (priceSortValue === 1) return a.price - b.price
    else if (priceSortValue === 2) return b.price - a.price
  })

  const data = priceSortData

  return (
    <div>
      <h1 className='title'>PRODUCTS</h1>
      <section className='products-container'>
        <Filter />
        <div className='products-wrap'>
          {data.map((item, index) => (
            <Product item={item} key={index} />
          ))}
        </div>
        {data.length === 0 && <p>查無此商品</p>}
      </section>
    </div>
  )
}

export default Products