import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import React, { useState } from 'react'
import {Calendar} from "primereact/calendar"

function Datepicker() {
    
     const [dateRange, setDateRange] = useState(null)

     const onSubmit =() =>{
      const btn = document.getElementById('btn')
      setDateRange("")
      btn.innerHTML = "CLICKED"
  }
  return (
    <div style={{display:"grid",gridAutoColumns:"repeat(4,1fr)",gap:"15px"}}>
    
     
      <Calendar value={dateRange} onChange={(e) => setDateRange(e.value)} selectionMode="range"/>
      <button id='btn' onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Datepicker;