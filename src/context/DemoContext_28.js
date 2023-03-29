import React,{useContext, useReducer, useEffect } from "react";
import DemoReducer_28 from './DemoReducer_28';
import{supabase} from'../db/clientSupabase';
import axios from 'axios';

let api_url = `https://one112-server-card-demo-28.onrender.com/api/card2_28`
const initialState ={
    pName:'Chang Yo-Hao',
    pId:'909410028',
    blogs:[],
    blogs2:[]
}
const DemoContext_28 = React.createContext();
const DemoProvider_28 =({children})=>{
const[state, dispatch ] = useReducer(DemoReducer_28,initialState)
const fetchBlogDataFromSupabase = async ()=>{
    try{
      let {data,error} =await supabase.from
      ('card_28').select('*');
      console.log('data',data);
      dispatch({type:'GET_BLOGS_SUPABASE_SUCCESS',payload:data})
      //setData(data)
    }catch(error){
     console.log(error);
    }}
  useEffect(()=>{
    fetchBlogDataFromSupabase();
  },[])


  const fetchBlogDataFromNodeServer = async ()=>{
    try{
      const results =await axios.get(api_url);
      console.log('results',results);
      dispatch(results.data)

    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchBlogDataFromNodeServer();
  },[])
  
return(
<DemoContext_28.Provider value={{...state}}>
    {children}
</DemoContext_28.Provider>)}
const useDemoContext_28 = ()=>{
    return useContext(DemoContext_28);
}
export {DemoProvider_28,useDemoContext_28}