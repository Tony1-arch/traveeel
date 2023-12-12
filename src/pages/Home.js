import React from 'react'
import Hero from '../components/Hero'
import Searchanddate from '../components/Searchanddate'
import Iconcards from '../components/Iconcards'
import Mainmenu from '../components/Mainmenu'
import Blog from '../components/Blog'
import Clients from '../components/Clients'
import Foooter from '../components/Foooter'

function Home() {
  return (
    <div className='home-main'>
      <Hero/>
      <Searchanddate/>
      <Iconcards/>
      <Mainmenu/>
      <Blog/>
      <Clients/>
      <Foooter/>
    </div>
  )
}

export default Home