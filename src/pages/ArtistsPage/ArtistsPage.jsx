import React from 'react'
import { artistsData } from '../../db/artistData'
import './ArtistsPage.scss'
import { Link } from 'react-router-dom'

const Artists = () => {
  return (
    <div>
      <h2 className='title'>Artists</h2>
      <section className='container'>
        <div className='artists-page-container'>
          {artistsData.map(people => (
            <article className='artist-card-wrap' key={people.id}>
              <div className='artist-card face w-full h-full '>
                <img
                  className='w-full h-full object-cover'
                  src={people.img} alt={people.name} />
              </div>
              <div className='artist-card back w-full h-full'>
                <div className='artist-card-info'>
                  <img
                    src={people.img}
                    alt={people.name}
                  />
                  <p>{people.name}</p>
                  <Link to={`/Artists/${people.id}`}>個人故事</Link >
                </div>
              </div>
            </article >
          ))}
        </div>
      </section >
    </div >
  )
}

export default Artists