import React from 'react'
import './artists.scss'
import { artistsData } from '../../../db/artistData'
import { Link } from 'react-router-dom'

const Artists = () => {
  return (
    <div>
      <h1 className='title'>ARTISTS</h1>
      <section className='artists-container'>
        <Artist />
      </section>
    </div>
  )
}

const Artist = () => {
  return (
    <div className='artists-wrap grid grid-cols-1 sm:grid-cols-2 gap-4'>
      {artistsData.map((artist, index) => (
        <Link to={`/Artists/${artist.id}`} key={index} className='artist bg-gray-100 rounded-md shadow-md'>
          < img
            className='w-full object-cover'
            src={artist.img}
            alt={artist.name}
          />
        </Link>
      ))
      }
    </div >
  )
}

export default Artists