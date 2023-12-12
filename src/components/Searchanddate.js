import React, {  useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import {Calendar} from "primereact/calendar"
function Searchanddate() {

    /*   datepicker */
      const [dateRange, setDateRange] = useState(null)

      const onSubmit =() =>{
       const btn = document.getElementById('btn')
       setDateRange("")
       setValue("")
       btn.innerHTML = "Submited"
      }

    /*   country picker */
      const [value , setValue] = useState(); 
      const [data, setData] = useState([{id:1,name:'uganda'},{id:2,name:'kenya'},{id:3,name:'united States Of America'},{id:4,name:'united Arab Emirates'},
      {id:5,name:'poland'},
      {id:6,name:'india'},
      {id:7,name:'tanzania'},
      {id:8,name:'russia'},
      {id:9,name:'italy'},
      {id:10,name:'thailand'},
      {id:11,name:'taiwan'},
      {id:12,name:'sweden'},
    ])
      const onChange =  (e) =>{
            setValue(e.target.value)
            setData(data)
            
            console.log(data)  
      }
      
  return (
    
    <div className='search'>
    {  /*   country picker */ }
    <div className="main-search">
      <div  className="inner-search" >
 
             <input type="text"  onChange={onChange}  value={value} placeholder='Search Your location'/>
            <div className="drop-list">
            
            {
              value && data.filter(item => item.name.startsWith(value) && item.name !== value)
             .slice(0,1).map(item => 
             <div key={item.id} onClick={(e)=> setValue(item.name)}>
             <h2>{item.name} </h2>   
             </div>
             )
            }
          
        
  </div>  
            </div>

 
      
      <div className='innerDatepicker'>
    
    {/* datepicker  */}

  <Calendar value={dateRange} onChange={(e) => setDateRange(e.value)} selectionMode="range" placeholder='choose dates'/>
  <button id='btn' onClick={onSubmit} >Submit</button>
</div>
      
      </div>
    </div>
  )
}

export default Searchanddate