import React from 'react'
import { useParams } from 'react-router-dom'
import { artistsData } from '../../../db/artistData'
import './ArtistID.scss'

const ArtistID = () => {
  let params = useParams()
  let getArtist = () => (artistsData.find(artist => (
    artist.id === params.id
  )))
  let artist = getArtist()
  return (
    <div className='artist-id-container'>
      <div className='artist-id-bg' style={{ backgroundImage: `url("${artist.img}")` }}></div>
      <section className='container'>
        <div className='artist-id-wrap rounded-lg'>
          <img
            className='w-80 h-full object-cover shadow-md'
            src={artist.img}
            alt={artist.id}
          />
          <div className='artist-id-info p-5'>
            <h2>姓名</h2>
            <p>{artist.name}</p>
            <h2>個人簡介</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt quia possimus ullam sed, nulla ea hic, accusamus doloribus, impedit at repellendus enim officia corporis odit ab! Dicta, harum fuga.</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ArtistID