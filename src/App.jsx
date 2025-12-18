

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Contact from "./Contact";
import ProductDetail from "./ProductDetail";
import ProductsFromAPI from "./ProductsFromAPI";
import AddProduct from "./AddProduct";
import { CartProvider } from "./CartContext";

function App(){
  return(
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Product/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/api-test" element={<ProductsFromAPI/>}/>
          <Route path="/add-product" element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App


