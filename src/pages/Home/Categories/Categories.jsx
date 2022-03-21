import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scss'

const Categories = () => {
  return (
    <div>
      <h1 className='title'>CATEGORIES</h1>
      <section className='container'>
        <Items />
      </section>
    </div>
  )
}

const Items = () => {
  return (
    <a href='/Products' className='categories-wrap' >
      {
        ['風景', '圖畫', '抽象', '景物'].map((item, index) => (
          <div className='categories-item' key={index}>
            <img src={require(`../../../assets/Categories/${item}.jpg`)} alt={item} />
            <p>{item}</p>
          </div>
        ))
      }
    </a >
  )
}

export default Categories