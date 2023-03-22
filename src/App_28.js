import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import BlogStaticPage_xx from './pages/BlogsStaticPage_28';
import HomePage_28 from './pages/HomePage_28';
import BlogsLocalJsonPage_28 from './pages/BlogsLocalJsonPage_28';
import BlogsNodeServerPage_28 from './pages/BlogsNodeServerPage_28';
import BlogsSupabasePage_28 from './pages/BlogsSupabasePage_28';
function App_28() {
  return (
    <BrowserRouter>
    <Routes>     
      <Route path = '/' element={HomePage_28}></Route>

      <Route path = '/card_28' element={<BlogStaticPage_xx/>}></Route>
      <Route path = '/card2_local_28' element={<BlogsLocalJsonPage_28/>}></Route>
      <Route path = '/card2_node_28' element={<BlogsNodeServerPage_28/>}></Route>
      <Route path = '/supabase_28' element={<BlogsSupabasePage_28/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App_28;
