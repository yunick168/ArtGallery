import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux';
import { changeArtist, changeCategory, changePriceSort } from '../../../features/filterSlice'
//components
import ArtistFilter from './ArtistFilter';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const Filter = () => {
  const [artist, setArtist] = useState('全部')
  const [category, setCategory] = useState('全部')
  const [priceSort, setPriceSort] = useState(0)
  const dispatch = useDispatch()

  const filterSubmitHandle = (e, artist) => {
    e.preventDefault()
    dispatch(changeArtist(artist))
    dispatch(changeCategory(category))
    dispatch(changePriceSort(priceSort))
  }

  return (
    <form className='flex items-center'>
      <ArtistFilter artist={artist} setArtist={setArtist} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <PriceFilter priceSort={priceSort} setPriceSort={setPriceSort} />
      <button
        onClick={(e) => filterSubmitHandle(e, artist)}
        className='bg-stone-500 ml-2 p-2 px-5 text-white rounded-sm'>
        確定
      </button>
    </form>
  )
}

export default Filter