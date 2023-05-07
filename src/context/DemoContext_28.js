import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';

import DemoReducer_28 from './DemoReducer_28';

// import { supabase } from '../db/clientSupabse';

let api_midprep_url = `http://localhost:5001/api/midprep_28/overview2_28`;

let api_midterm_url = `http://localhost:5001/api/mid_28/menu_28`;
let api_url = 'http://localhost:5001/api/mid_28/menu_28'

const initialState = {
  pName: 'Chang Yo-Hao',
  pId: '909410028',
  blogs: [],
  blogs2: [],
  data1: [],
  data2: [],
  menu: [],
};

const DemoContext_28 = React.createContext();

const DemoProvider_28 = ({ children }) => {
  const [state, dispatch] = useReducer(DemoReducer_28, initialState);

  const fetchMenuDataFromNodeServer = async (filter = '') => {
    try {
      const results = await axios.get(`${api_midterm_url}/${filter}`);
      console.log('results', results);
      dispatch({ type: 'GET_MENU_NODE_SUCCESS', payload: results.data });
      // setData(results.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMenuDataFromNodeServer();
  }, {});

  const changeMenuFilter = (filter) => {
    console.log('filter', filter);
    fetchMenuDataFromNodeServer(filter);
  };

  const fetchProductDataFromNodeServer = async () => {
    try {
      const results = await axios.get(api_midprep_url);
      console.log('product data', results.data);
      dispatch({ type: 'GET_PRODUCTS_NODE_SUCCESS', payload: results.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDataFromNodeServer();
  }, []);

  //   const fetchBlogDataFromSupabase = async () => {
  //     try {
  //       let { data, error } = await supabase.from('card_28').select('*');

  //       console.log('data', data);
  //       dispatch({ type: 'GET_BLOGS_SUPABASE_SUCCESS', payload: data });
  //       //   setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchBlogDataFromSupabase();
  //   }, []);

  return (
    <DemoContext_28.Provider value={{ ...state, changeMenuFilter }}>
      {children}
    </DemoContext_28.Provider>
  );
};

const useDemoContext_28 = () => {
  return useContext(DemoContext_28);
};

export { DemoProvider_28, useDemoContext_28, };
