import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

import '../../App.css';


const App_28= ()=> {
  const [products, setProducts] = useState([]);
  const params = useParams();
  console.log('Params category',params.category);
  
  const getMenuData_28 = async () =>{
    const response = await fetch(`https://bmzxxmfoxghswpelukyz.supabase.co/rest/v1/menu_28?select=*`,{
      method:'GET',
      headers:{
        apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtenh4bWZveGdoc3dwZWx1a3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNTY5ODUsImV4cCI6MTk5MjYzMjk4NX0.6N8UbgHKfN7OuoKlNRFf8yUNMkNszU1tr8FWbOjjEsc`,
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtenh4bWZveGdoc3dwZWx1a3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNTY5ODUsImV4cCI6MTk5MjYzMjk4NX0.6N8UbgHKfN7OuoKlNRFf8yUNMkNszU1tr8FWbOjjEsc`
      }
    });
    const data = await response.json();
    
    console.log('menu data',data);
    setProducts(data);
    
  }


  useEffect(()=>{
    getMenuData_28();
    
  },[])
  return (    
  <section>
      <div className="btn-container"></div>
      <div className="section-center">
        <section className="menu">
          <div className="title">
            <h2>Menu from Supabase menu table</h2>
            <h3>張祐豪, 909410028</h3>
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
          </div>
        </section>
      </div>
    </section>
  );
}

export default App_28;
