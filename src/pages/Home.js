import React from 'react'
import Searchanddate from '../components/Searchanddate'
import Iconcards from '../components/Iconcards'
import Mainmenu from '../components/Mainmenu'
import Blog from '../components/Blog'
import Clients from '../components/Clients'
import Foooter from '../components/Foooter'
import Heeader from '../components/Heeader'





function Home() {
  return (
    <div >
      <Heeader/>
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