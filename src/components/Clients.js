import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
function Clients() {
  return (
    <div className='container-client'>
    <div className="heading-clent">
      <h2>Clients</h2>
    </div>
    <div className="main-client">
      <div className="block1">
            <div className="text">
            <div className="iconn">
            <FaQuoteLeft/>
            </div>
            <div className="contentt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam
eget felis eget nunc lobortis. Purus in massa tempor nec.
Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet</p>
            </div>
            </div>
            <div className="imgg">
                  <img src='https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200' alt=''/>
                  <div className="titles">
                  <h3>Mario Rossi</h3>
                  <h5>Manager</h5>
                  </div>
                 
            </div>
      </div>
      <div className="block1">
            <div className="text">
            <div className="iconn">
            <FaQuoteLeft/>
            </div>
            <div className="contentt">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ultricies mi eget mauris pharetra. Amet risus nullam
eget felis eget nunc lobortis. Purus in massa tempor nec.
Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet</p>
            </div>
            </div>
            <div className="imgg">
                  <img src='https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200' alt=''/>
                  <div className="titles">
                  <h3>Mario Rossi</h3>
                  <h5>Manager</h5>
                  </div>
                 
            </div>
      </div>
    </div>
    </div>
  )
}

export default Clients