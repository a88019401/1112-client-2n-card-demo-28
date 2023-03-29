import { useState } from 'react';
import Wrapper from '../assets/wrapper/Blogs_28'
import { useDemoContext_28 } from '../context/DemoContext_28';

const BlogStaticPage_28 = () =>{
    //const [name, setName ] = useState('Jimmy Chang');
    //const [id, setId] = useState('909410028')
    const {pName,pId,blogs} =useDemoContext_28();
    return (
        <Wrapper>
            <section className="blogs">
      <div className="section-title">
        <h2> fetch blogs from static data  -- {pName}{pId}</h2>
      </div>
      <div className="blogs-center2">
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

export default BlogStaticPage_28;