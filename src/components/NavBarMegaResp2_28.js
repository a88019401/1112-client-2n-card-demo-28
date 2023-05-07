import React from "react";
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrapper/NavbarMegaResp2_28';

const NavbarMegaResp2_28 = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div classNameName="header-item item-left">
              <div className="logo">
                <Link to="#">TKUdemo</Link>
              </div>
            </div>
            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back"><i className="fa fa-angle-left"></i></div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="menu-main">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">New <i className="fa fa-angle-down"></i></Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <Link to="#">
                          <img src="/mega2/img/p1.jpg" alt="new Product" />
                          <h4 className="title">Product 1</h4>
                        </Link>
                      </div>
                      <div className="list-item text-center">
                        <Link to="#">
                          <img src="/mega2/img/p2.jpg" alt="new Product" />
                          <h4 className="title">Product 2</h4>
                        </Link>
                      </div>
                      <div className="list-item text-center">
                        <Link to="#">
                          <img src="/mega2/img/p3.jpg" alt="new Product" />
                          <h4 className="title">Product 3</h4>
                        </Link>
                      </div>
                      <div className="list-item text-center">
                        <Link to="#">
                          <img src="/mega2/img/p4.jpg" alt="new Product" />
                          <h4 className="title">Product 4</h4>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">className Demo <i className="fa fa-angle-down"></i></Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Week 1~6</h4>
                        <ul>
                          <li>
                            <Link to="#">Calculator</Link>
                          </li>
                          <li>
                            <Link to="#">TicTacToe</Link>
                          </li>
                          <li>
                            <Link to="#">Review</Link>
                          </li>
                          <li>
                            <Link to="#">Menu-1</Link>
                          </li>
                          <li>
                            <Link to="#">Menu-2</Link>
                          </li>
                          <li>
                            <Link to="#">Modal</Link>
                          </li>
                          <li>
                            <Link to="#" onclick="showclassNameDemo('w6-p3')"
                            >Temp. Convert
                            </Link>
                            <Link to="#" onclick="showclassNameDemo('w6-md')"
                            >(w6-md)</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Midprep Exam</h4>
                        <ul>
                          <li>
                            <Link to="#">P1 - BMI (console) </Link>
                          </li>
                          <li>
                            <Link to="#">P2 - Counter</Link>
                          </li>
                          <li>
                            <Link to="#">P3 - Tours</Link>
                          </li>
                        </ul>
                        <h4 className="title">Midterm Exam (w10)</h4>
                        <ul>
                          <li><Link to="#">P1</Link></li>
                          <li><Link to="#">P2</Link></li>
                          <li><Link to="#">P3</Link></li>
                          <li><Link to="#">P4</Link></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Week 11~17</h4>
                        <ul>
                          <li><Link to="#">(w11)</Link></li>
                          <li><Link to="#">(w12)</Link></li>
                          <li><Link to="#">(w13)</Link></li>
                          <li><Link to="#">(w14)</Link></li>
                          <li><Link to="#">(w15)</Link></li>
                          <li><Link to="#">(w16)</Link></li>
                          <li><Link to="#">(w17)</Link></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src="/mega2/img/shop1.jpg" alt="shop" />
                        <img src="/mega2/img/tku.jfif" alt="" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Midterm_28 <i className="fas fa-angle-down"></i></Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><Link to="/mid_static_28">Static</Link></li>
                        <li><Link to="/mid_localjson_28">Local Json</Link></li>
                        <li><Link to="/mid_node_28">Node Server</Link></li>
                        <li><Link to="/mid_node_context_28">Node + Context</Link></li>
                        <li><Link to="/mid_supabase_context_28">Supabase + Context</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Pages <i className="fas fa-angle-down"></i></Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><Link to="#">Login</Link></li>
                        <li><Link to="#">Register</Link></li>
                        <li><Link to="#">Faq</Link></li>
                        <li><Link to="#">404 Page</Link></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-item item-right">
              <Link
                to="https://github.com/htchung/1112-1N-js-demo-id"
                target="_blank"
              ><i className="fab fa-github"></i
              ></Link>
              <Link
                to="https://github.com/htchung/1112-1N-js-demo-id/commits/main"
                target="_blank"
              ><i className="fab fa-git-alt"></i
              ></Link>
              <Link to="#"><i className="fas fa-cog"></i></Link>
              <div className="mobile-menu-trigger">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  )
};


export default NavbarMegaResp2_28;
