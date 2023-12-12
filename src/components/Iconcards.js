import React from 'react'
import { TbDiscountCheck } from "react-icons/tb";
import { FaVirusCovid } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
function Iconcards() {
  return (
    <div className='containerCard'>
    <div className="item">
      <div className="ineritem">
            <div className="icon">
           <TbDiscountCheck/>
            </div>
            <div className="content">
            <h3>Get Best Prices</h3>
            <p>Pay through our application and save thousands and get amaizing rewards</p>
            </div>
      </div>
    </div>
    <div className="item">
      <div className="ineritem">
            <div className="icon">
           <FaVirusCovid/>
            </div>
            <div className="content">
            <h3>Covid Safe</h3>
            <p>We have all the curated jotels that have all the precaution for a covid safe enviroment</p>
            </div>
      </div>
    </div>
    <div className="item">
      <div className="ineritem">
            <div className="icon">
           <FaCreditCard/>
            </div>
            <div className="content">
            <h3>Flexible Payment</h3>
            <p>Enjoy the Flexible payment through our app and get rewards on every payment</p>
            </div>
      </div>
    </div>
    <div className="item">
      <div className="ineritem">
            <div className="icon">
           <FaLocationDot/>

            </div>
            <div className="content">
            <h3>Find The Best Near You</h3>
            <p>Find the best hotel and places to visit near you in a single click</p>
            </div>
      </div>
    </div>
    
      
    </div>
  )
}

export default Iconcards