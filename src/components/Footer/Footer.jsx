import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between flex-col sm:flex-row py-3 px-5 bg-stone-600 text-stone-300'>
      <p>Author - Yunick</p>
      <p>Website Create By 2022 ~ {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer