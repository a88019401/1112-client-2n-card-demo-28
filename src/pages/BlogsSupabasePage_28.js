import { useState,useEffect } from 'react';
//import axios from 'axios';
//import blogData from '../data/blogData2_28'
//let api_url = `http://localhost:5000/api/card2_28`;
//let api_url = `https://one112-server-card-demo-28.onrender.com/api/card2_28`
import { supabase } from '../db/clientSupabase';
import Wrapper from '../assets/wrapper/Blogs_28'
import { useDemoContext_28 } from '../context/DemoContext_28';
const BlogsSupabasePage_28 = () =>{
    //const [name, setName ] = useState('Jimmy Chang');
   // const [id, setId] = useState('909410028');
   // const [data, setData] = useState([]);
    //console.log('blog data' , data);
    const {pName,pId,blogs} =useDemoContext_28();
    //const fetchBlogDataFromSupabase = async ()=>{
      //try{
        //let {data,error} =await supabase.from
        //('card_28').select('*');
        //console.log('data',data);
        //setData(data)
      //}catch(error){
       //console.log(error);
      //}
    //}
    //useEffect(()=>{
      //fetchBlogDataFromSupabase();
    //},[])
    return (
        <Wrapper>
            <section className="blogs">
      <div className="section-title">
        <h2>fetch blogs from supabase </h2>
        <h3>{pName}{pId}</h3>
      </div>
      <div className="blogs-center2">
        {blogs.map((item)=>{
          const {pId,img,remote_img,category,title,desc}=item;
          return(        
          <article key={pId} className="blog">
          <img
            src={img}
            alt={title}
            className="img blog-img"
          />
          <div className="blog-content">
            <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">read more</a>
          </div>
        </article>)
        })}
        <article className="blog">
          <img
            src="./images/photo-1.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>seven reasons why coffee is awesome</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-2.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-globe"></i></span>
            <h3>travel to paris</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-3.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee brings friendship</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-4.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee make you feel good</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-5.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>lifestyle <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>coffee make you calm</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-6.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-globe"></i></span>
            <h3>101 tower in Taipei</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-7.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>sun rise from the mountain</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-8.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>serene lake with trees</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
        <article className="blog">
          <img
            src="./images/photo-9.jpg"
            alt="Coffee photo"
            className="img blog-img"
          />
          <div className="blog-content">
            <span>travel <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>rocks of queen head in Yehliu Taiwan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#">read more</a>
          </div>
        </article>
      </div>
    </section>
        </Wrapper>
    )
}

export default BlogsSupabasePage_28;