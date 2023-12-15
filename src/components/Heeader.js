import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Heeader() {
  return (
    
      <Carousel className='headd'>
    <Carousel fade className="contain-header" >
      <Carousel.Item className='header-item'>
      <img src='https://cdn.pixabay.com/photo/2018/02/27/06/30/skyscrapers-3184798_640.jpg'  alt='p'/>

        <Carousel.Caption>
          <h3>TRAVEL TO EXPLORE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='header-item'>
      <img src='https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb'  alt='p'/>
        <Carousel.Caption>
          <h3>TRAVEL TO EXPLORE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='header-item'>
      <img src='https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb'  alt='p'/>
        <Carousel.Caption>
          <h3>TRAVEL TO EXPLORE</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam quas, aspernatur repellat eligendi corporis quasi magnam cum quae adipisci ducimus quod laborum voluptatibus quaerat a in hic officiis numquam.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
</Carousel>
  )
}

export default Heeader