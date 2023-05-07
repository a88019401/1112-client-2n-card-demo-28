import { useState, useEffect } from 'react';
import axios from 'axios';

import Wrapper from '../../assets/wrapper/mid_28/Menu_28';
let api_url = 'http://localhost:5001/api/mid_28/menu_28'
const MenuNodeServerPage_28 = () => {
  const [name, setName] = useState('yaoho changs');
  const [id, setId] = useState('909410028');
  const [data, setData] = useState([]);
  const fetchMenuDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_url);
      console.log('results', results); setData(results.data);
    }
    catch (error) { console.log(error); }
  }

  useEffect(() => {
    fetchMenuDataFromNodeServer();
  }, {});
  return (
    <Wrapper>
      <section className="menu">
        <div className="title">
          <h2>our menu - 909410028</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button type="button" className="filter-btn" data-id="all">all</button
          ><button type="button" className="filter-btn" data-id="breakfast">
            breakfast</button
          ><button type="button" className="filter-btn" data-id="lunch">
            lunch</button
          ><button type="button" className="filter-btn" data-id="dessert">
            dessert</button
          ><button type="button" className="filter-btn" data-id="shakes">
            shakes
          </button>
        </div>
        <div className="section-center">
          {data.map((item) => {
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
    </Wrapper>
  );
};


export default MenuNodeServerPage_28;
