import React from 'react'
import Header from './Header/Header'
import Categories from './Categories/Categories'
import Artists from './Artists/Artists'
import InvitationCard from './InvitationCard/InvitationCard'

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Artists />
      <InvitationCard />
    </div>
  )
}

export default Home