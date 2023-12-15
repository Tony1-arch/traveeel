import React, {  useState } from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import Stack from 'react-bootstrap/Stack';
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
    
   
    <div className="main-se">
  <Stack direction="horizontal" gap={1}>
      <div className="p-2">
      <div  >
 
 <input type="text"  onChange={onChange} className='inputCountry'  value={value} placeholder='location' />
<div >

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
      </div>
      <div className="p-2 ">
      <div >
    
    {/* datepicker  */}

  <Calendar value={dateRange} onChange={(e) => setDateRange(e.value)} className=".inputDate" selectionMode="range" placeholder='dates'/>
 
  
</div>
      </div>
      <div className="p-2">
      <div>
      <button id="btn" onClick={onSubmit} className='btn-search' variant="success">Submit</button>
  </div>
      </div>
    </Stack>
   </div>
  )
}

export default Searchanddate