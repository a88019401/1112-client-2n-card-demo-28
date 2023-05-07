import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage_28 from './pages/HomePage_28';
import BlogsStaticPage_28 from './pages/BlogsStaticPage_28';
import BlogsLocalJsonPage_28 from './pages/BlogsLocalJsonPage_28';
import BlogsNodeServerPage_28 from './pages/BlogsNodeServerPage_28';
import BlogsSupabasePage_28 from './pages/BlogsSupabasePage_28';

//product
import ProductsStaticPage_28 from './pages/midprep_28/ProductsStaticPage_28';

import ProductsNodeServerPage_28 from './pages/midprep_28/ProductsNodeServerPage_28';

import ProductsNodeServerContextPage_28 from './pages/midprep_28/ProductsNodeServerContextPage_28';
//Menu
import MenuStaticPage_28 from './pages/mid_28/MenuStaticPage_28';
import MenuLocalJsonPage_28 from './pages/mid_28/MenuLocalJsonPage_28';
import MenuNodeServerPage_28 from './pages/mid_28/MenuNodeServerPage_28';
import MenuNodeServerContextPage_28 from './pages/mid_28/MenuNodeServerContextPage_28';

import Navbar from './components/NavBarMegaResp2_28.js';

function App_28() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/card_28' element={<BlogsStaticPage_28 />} />
        <Route path='/local_28' element={<BlogsLocalJsonPage_28 />} />
        <Route path='/node_28' element={<BlogsNodeServerPage_28 />} />
        <Route path='/supabase_28' element={<BlogsSupabasePage_28 />} />
        <Route path='/midp_static_28' element={<ProductsStaticPage_28 />} />
        <Route path='/midp_node_28' element={<ProductsNodeServerPage_28 />} />

        <Route
          path='/midp_node_context_28'
          element={<ProductsNodeServerContextPage_28 />}
        />
        <Route path='/mid_static_28' element={<MenuStaticPage_28 />} />
        <Route path='/mid_localjson_28' element={<MenuLocalJsonPage_28 />} />
        <Route path='/mid_node_28' element={<MenuNodeServerPage_28 />} />
        <Route path='/mid_node_context_28' element={<MenuNodeServerContextPage_28 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App_28;
