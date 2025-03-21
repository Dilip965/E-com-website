import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import About from './Pages/About/about';
import Blog from './Pages/Blog/blog';
import Contact from './Pages/Contact/contact';
import Home from './Pages/Home/home';
import Deals from './Pages/Deals/deals';
import MegaMenu from './Pages/Mega_menu/mega_menu';
import Shop from './Pages/Shop/shop';
import Vendors from './Pages/Vendors/vendors';
import Pages  from './Pages/Pages/Pages';
import Listing from './Pages/Listing/Listing';
import Newsletter from './component/newsletter';
import Notfound from './Pages/Notfound/index';
import Detail from './Pages/details/index';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/mega_menu" element={<MegaMenu />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/pages" element={<Pages/>} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/product/detail" element={<Detail/>} />
        
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Newsletter/>
    
      <Footer />
      
    </Router>
  );
}

export default App;
