
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';  
import Cart from './Pages/Cart';  
import LoginSignup from './Pages/LoginSignup';  
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Whisky' element={<Category banner={men_banner} category="Whisky"/>}/>
          <Route path='/Wine' element={<Category banner={women_banner} category="Wine"/>}/>
          <Route path='/Beer' element={<Category  banner={kids_banner} category="Beer"/>}/>
          <Route path='/Gin' element={<Category category="Gin"/>}/>
          <Route path='/Vodka' element={<Category category="Vodka"/>}/>
          <Route path='/Rum' element={<Category category="Rum"/>}/>
          <Route path='/Tequila' element={<Category category="Tequila"/>}/>
          
          <Route path="/Product" element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>
          </Route>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
  
        </BrowserRouter>
    </div>
  );
}

export default App;
