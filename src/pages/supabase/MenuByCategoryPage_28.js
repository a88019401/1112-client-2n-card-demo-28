import {  useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../../App.css';
import MenuProducts_28 from '../../components/MenuProducts_28';

const base_url = `https://bmzxxmfoxghswpelukyz.supabase.co/rest/v1/menu_28?select=*`;

let url = `${base_url}`

const options ={    
  method:'GET',
headers:{
  apikey:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtenh4bWZveGdoc3dwZWx1a3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNTY5ODUsImV4cCI6MTk5MjYzMjk4NX0.6N8UbgHKfN7OuoKlNRFf8yUNMkNszU1tr8FWbOjjEsc`,
  Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtenh4bWZveGdoc3dwZWx1a3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwNTY5ODUsImV4cCI6MTk5MjYzMjk4NX0.6N8UbgHKfN7OuoKlNRFf8yUNMkNszU1tr8FWbOjjEsc`
}};
const MenuByCategoryPage_28= ()=> {
  const [products, setProducts] = useState([]);
  const [category,setCategory]= useState('all');
  const params = useParams();
  console.log('Params category',params.category);

  const changeFilter = (category) =>{
    console.log('category', category);
    setCategory(category);
    //window.location.href = `/supa_menu_28${filter}`;
    }
  const Navigate = useNavigate();
  /*const changeFilter = (filter = '' ) =>{
    window.location.href = `/supa_menu_28/${filter}`
  }*/
  const getMenuDataByCategory_28 = async (filter) =>{
    if(params.category=== 'all'){
      url = `${base_url}`;
    }else{
      url = `${base_url}&category=eq.${params.category}`;

    }
    
    const response = await fetch(url,options);
    const data = await response.json();
    console.log(`${filter} data`,data);
    setProducts(data);
    
  }
  


  useEffect(()=>{
    getMenuDataByCategory_28();
    
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
            <button type="button" className="filter-btn" data-id="all" onClick={()=>{changeFilter('all');
            return Navigate('/supa_menu_28/all');}}>all</button
            ><button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{changeFilter('breakfast');return Navigate('/supa_menu_28/breakfast');}}>
              breakfast</button
            ><button type="button" className="filter-btn" data-id="lunch" onClick={()=>{changeFilter('lunch');return Navigate('/supa_menu_28/lunch')}}>
              lunch</button
            ><button type="button" className="filter-btn" data-id="dessert" onClick={()=>{changeFilter('dessert');return Navigate('/supa_menu_28/dessert')}}>
              dessert</button
            ><button type="button" className="filter-btn" data-id="shakes" onClick={()=>{changeFilter('shakes');return Navigate('/supa_menu_28/shakes')}}>
              shakes
            </button>
          </div>
          {/*<div className="section-center">
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
          </div>*/}
          <MenuProducts_28 products ={products} />
        </section>
      </div>
    </section>
  );
}

export default MenuByCategoryPage_28;
