import { useState, useEffect } from 'react';
import axios from 'axios';


import Wrapper from '../../assets/wrapper/mid_28/Menu_28';
import { useDemoContext_28 } from '../../context/DemoContext_28';
// let api_url = 'http://localhost:5001/api/mid_28/menu_28'
const MenuNodeServerContextPage_28 = () => {
  const { pName, pId, menu, changeMenuFilter } = useDemoContext_28();
  // const [name, setName] = useState('yohao changs');
  // const [id, setId] = useState('909410028');
  // const [data, setData] = useState([]);

  return <Wrapper>
    <section className="menu">
      <div className="title">
        <h2>our menu - {pId}</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" className="filter-btn" onClick={() => { changeMenuFilter(''); }} data-id="all">all</button>
        <button type="button" className="filter-btn" onClick={() => { changeMenuFilter('breakfast'); }} data-id="breakfast">breakfast</button>
        <button type="button" className="filter-btn" onClick={() => { changeMenuFilter('lunch'); }} data-id="lunch">lunch</button>
        <button type="button" className="filter-btn" onClick={() => { changeMenuFilter('dessert'); }} data-id="dessert">dessert</button>
        <button type="button" className="filter-btn" onClick={() => { changeMenuFilter('shakes'); }} data-id="shakes">shakes</button>
      </div>
      <div className="section-center">
        {menu.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt="big" salad="" className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">
                  {desc}
                </p>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  </Wrapper>;
};

export default MenuNodeServerContextPage_28;
