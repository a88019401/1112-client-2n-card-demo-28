import { useState } from 'react';

import Wrapper from '../../assets/wrapper/mid_28/Menu_28';

const MenuStaticPage_28 = () => {
  const [name, setName] = useState('yohao chang');
  const [id, setId] = useState('909410028');
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
          <article className="menu-item">
            <img src="/menu/img/my-1.jpg" alt="eggs" className="photo" />
            <div className="item-info">
              <header>
                <h4>eggs</h4>
                <h4 className="price">12.59</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <img src="/menu/img/my-2.jpg" alt="big" salad="" className="photo" />
            <div className="item-info">
              <header>
                <h4>big salad</h4>
                <h4 className="price">12.59</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <img src="/menu/img/my-3.jpg" alt="fried" dish="" className="photo" />
            <div className="item-info">
              <header>
                <h4>fried dish</h4>
                <h4 className="price">12.59</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <img
              src="/menu/img/item-1.jpeg"
              alt="buttermilk"
              pancakes=""
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>buttermilk pancakes</h4>
                <h4 className="price">15.59</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <img
              src="/menu/img/item-2.jpeg"
              alt="dinner"
              double=""
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>dinner double</h4>
                <h4 className="price">13.99</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <img
              src="/menu/img/item-3.jpeg"
              alt="godzilla"
              milkshake=""
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>godzilla milkshake</h4>
                <h4 className="price">13.99</h4>
              </header>
              <p className="item-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                dolores ut iusto quas quia dignissimos ullam. Enim voluptas,
                expedita architecto, cupiditate molestias quisquam error quam
                blanditiis tempore quo dicta. Ipsa.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default MenuStaticPage_28;
