import React from 'react';

const MenuProducts_28 = ({products})=>{
    return(
        <div className="section-center">
        {products.map((product)=>{
          const{key,img, price,title,descrip} = product;
          return(
            <article id={key} className="menu-item">
            <img src={img} alt="eggs" className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">
                {descrip}
              </p>
            </div>
          </article>
          )
        })}
      </div>)
}

export default MenuProducts_28;