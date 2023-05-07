import { useState, useEffect } from 'react';
import axios from 'axios';

import Wrapper from '../../assets/wrapper/mid_28/Menu_28';
let api_url ='http://localhost:5000/api/mid_28_menu_28'
const MenuNodeServerPage_28 = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');
  return (
    <Wrapper>
      <section className='menu'></section>
    </Wrapper>
  );
};/*
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState('123456789');
  
  const fetchMenuDataFromNodeServer = async()=>{
      try{const results = await axios.get(api_url);
      console.log('results',results);setData(results.data);}
      catch(error){console.log(error);}
  }

  useEffect(()=>{
    fetchMenuDataFromNodeServer();
  },{});
  return <Wrapper></Wrapper>;
};*/

export default MenuNodeServerPage_28;
