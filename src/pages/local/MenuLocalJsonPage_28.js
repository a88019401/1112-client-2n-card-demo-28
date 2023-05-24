import {  useState, useEffect } from 'react';
import MenuProducts_28 from '../../components/MenuProducts_28';
import '../../App.css';

const base_url = `/api/menu.json`;

let url = `${base_url}`



const MenuLocalJsonPage_28= ()=> {
  const [products, setProducts] = useState([]);
  //const params = useParams();
  //console.log('Params category',params.category);
  
const changeFilter = (filter) =>{
  if(filter === 'all'){
    url =`${base_url}`;
  }else{
      url =`${base_url}&category=eq.${filter}`;
    }
    getMenuData_28(filter);
  }
  const getMenuData_28 = async (filter = 'all') =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(`${filter} data`,data);
    setProducts(data);
    
  }


  useEffect(()=>{
    getMenuData_28();
    
  },[]);

  return (    
  <section>
      <div className="btn-container"></div>
      <div className="section-center">
        <section className="menu">
          <div className="title">
          <h2>Menu from local json menu table</h2>
            <h3>張祐豪, 909410028</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all" onClick={()=>{changeFilter('all');}}>all</button
            ><button type="button" className="filter-btn" data-id="breakfast" onClick={()=>{changeFilter('breakfast');}}>
              breakfast</button
            ><button type="button" className="filter-btn" data-id="lunch" onClick={()=>{changeFilter('lunch');}}>
              lunch</button
            ><button type="button" className="filter-btn" data-id="dessert" onClick={()=>{changeFilter('dessert');}}>
              dessert</button
            ><button type="button" className="filter-btn" data-id="shakes" onClick={()=>{changeFilter('shakes');}}>
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

export default MenuLocalJsonPage_28;
