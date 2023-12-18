import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Foooter() {
  return (
    <div className="container-footer">
      <div className="main-mainfotter">
             
             <div className="copyright">
                   <p>Copyright © 2021 Proto Web Site Test. All rights reserved</p>
             </div>
             <div className="menu-listt">
                   <p>Home</p>
                   <p>About</p>
                   <p>Place</p>
                   <p>Careers</p>
                   <p>Blog</p>
             </div>
             <div className="icon-footer">
                    <BsFacebook className="ligt"/>
                    <FaLinkedin className="dark"/>
                    <FaSquareInstagram className="purpl"/>
             </div>
           
             </div>
    </div> 
   
   
  )
}

export default Foooter