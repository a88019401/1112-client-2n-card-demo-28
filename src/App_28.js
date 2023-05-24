import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage_28 from './pages/HomePage_28';
import MenuStaticPage_28 from './pages/local/MenuStaticPage_28';
import SupabaseMenuPage_28 from './pages/supabase/MenuPage_28';
import SubaByCategoryPage_28 from './pages/supabase/MenuByCategoryPage_28';
import MenuNodePage_28 from "./pages/node/MenuNodePage_28";
import MenuLocalJsonPage_28 from "./pages/local/MenuLocalJsonPage_28";

const App_28= ()=> {
  return (
<BrowserRouter>

<Routes>
<Route exact path='/' element={<HomePage_28/>}/>

<Route path='/static_28' element={<MenuStaticPage_28/>}/>
<Route path='/supa_menu_28' element={<SupabaseMenuPage_28/>}/>

<Route path='/supa_menu_28/:category' element={<SubaByCategoryPage_28/>}/>
<Route path='/node_menu_28' element={<MenuNodePage_28/>}/>
<Route path='/local_menu_28' element={<MenuLocalJsonPage_28/>}/>

</Routes>







</BrowserRouter>
  );
}

export default App_28;
