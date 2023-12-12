import React from 'react'


function Hero() {
      
      
  return (
   <>
   <div className="slider-container">
  <div className="slider">
    <div className="slides">
      <div id="slides__1" className="slide">
      <div className="slide-content">
      <h2>TRAVEL TO EXPLORE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
      </div>
       {/* <span className="slide__text">1</span>
         <a className="slide__prev" href="#slides__4" title="Next"></a>
        <a className="slide__next" href="#slides__2" title="Next"></a> */}
      </div>
      <div id="slides__2" className="slide">
      <div className="slide-content">
      <h2>TRAVEL TO EXPLORE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
      </div>
       
        {/* <span className="slide__text">2</span> */}
       {/*  <a className="slide__prev" href="#slides__1" title="Prev"></a>
        <a className="slide__next" href="#slides__3" title="Next"></a> */}
      </div>
      <div id="slides__3" className="slide">
      <div className="slide-content">
      <h2>TRAVEL TO EXPLORE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
      </div>
      
        {/* <span className="slide__text">3</span> */}
      {/*   <a className="slide__prev" href="#slides__2" title="Prev"></a>
        <a className="slide__next" href="#slides__4" title="Next"></a> */}
      </div>
      <div id="slides__4" className="slide">
      <div className="slide-content">
      <h2>TRAVEL TO EXPLORE</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
      </div>
      
      
       {/*  <span className="slide__text">4</span> */}
       {/*  <a className="slide__prev" href="#slides__3" title="Prev"></a>
        <a className="slide__next" href="#slides__1" title="Prev"></a> */}
      </div>
    </div>
    <div className="slider__nav">
      <a className="slider__navlink" href="#slides__1"></a>
      <a className="slider__navlink" href="#slides__2"></a>
      <a className="slider__navlink" href="#slides__3"></a>
      <a className="slider__navlink" href="#slides__4"></a>
    </div>
  </div>
</div>
    </>
  )
}

export default Hero