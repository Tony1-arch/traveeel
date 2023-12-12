import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc,nights,price ,km } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                
              </header>
              <p className="item-text">{desc}</p>
              <div className="footter">
              <div>
              <h6>Km {km}</h6>
              <h6>Price: ${price}</h6>
              </div>
             <div className="night">
            
                  <h6>{nights}</h6>
            </div>
                 
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;