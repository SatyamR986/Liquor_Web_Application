
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';  
import Cart from './Pages/Cart';  
import LoginSignup from './Pages/LoginSignup';  
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Whisky' element={<Category category="Whisky"/>}/>
          <Route path='/Wine' element={<Category category="Wine"/>}/>
          <Route path='/Beer' element={<Category category="Beer"/>}/>
          <Route path='/Gin' element={<Category category="Gin"/>}/>
          <Route path='/Vodka' element={<Category category="Vodka"/>}/>
          <Route path='/Rum' element={<Category category="Rum"/>}/>
          <Route path='/Tequila' element={<Category category="Tequila"/>}/>
          <Route path='/Glass' element={<Category category="Glass"/>}/>
          <Route path='/Party Supplies' element={<Category category="Party Supplies"/>}/>

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
