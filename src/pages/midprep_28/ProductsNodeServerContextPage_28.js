import { useState, useEffect } from 'react';

// import axios from 'axios';

import Wrapper from '../../assets/wrapper/midprep_28/Products_scss_28';

import { useDemoContext_28 } from '../../context/DemoContext_28';

// import Wrapper from '../../assets/wrapper/midprep_28/Products_css_28';

// import blogsData from '../data/blogData2_28';

// let api_url = `http://localhost:5000/api/midprep_28/overview2_28`;

// let api_url = `https://one112-server-card-demo-28.onrender.com/api/card2_28`;

const ProductsNodeServerContextPage_28 = () => {
  const { pName, pId, data1, data2 } = useDemoContext_28();
  // const [name, setName] = useState('Hsingtai Chung');
  // const [id, setId] = useState('123456789');

  // const [data1, setData1] = useState([]);

  // const [data2, setData2] = useState([]);

  //  console.log('blog data', data);

  // const fetchBlogDataFromNodeServer = async () => {
  //   try {
  //     const results = await axios.get(api_url);
  //     console.log('results', results.data);
  //     setData1(results.data.data1);
  //     setData2(results.data.data2);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBlogDataFromNodeServer();
  // }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h2>Fetch Products From Node Server Using Context</h2>
          <h3>
            {pName} {pId}
          </h3>
        </div>
        <div className='collection-overview'>
          <div className='collection-preview'>
            <h2 className='title'>Womens</h2>
            <div className='preview'>
              {data1.map((item) => {
                const { pId, pname, price, img_url } = item;
                return (
                  <div className='collection-item' key={pId}>
                    <img className='image' src={img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{pname}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='collection-preview'>
            <h2 className='title'>Hats</h2>
            <div className='preview'>
              {data2.map((item) => {
                const { pId, pname, price, img_url } = item;
                return (
                  <div className='collection-item' key={pId}>
                    <img className='image' src={img_url} />
                    <div className='collection-footer'>
                      <span className='name'>{pname}</span>
                      <span className='price'>{price}</span>
                    </div>
                    <button className='custom-button'>Add to Cart</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsNodeServerContextPage_28;
