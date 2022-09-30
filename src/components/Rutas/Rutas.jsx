import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import './Rutas.css';
import Cart from "../Cart/Cart";
import CheckOut from "../Checkout/CheckOut";
import Footer from "../Footer/Footer";
const Rutas = () => {
   return(
  <>
    <div className="Rutas">
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/marca/:marcaId' element={<ItemListContainer/>} /> 
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
              <Route path="/Cart" element={<Cart/>}></Route>
              <Route path="/checkOut" element={<CheckOut/>}></Route>
           </Routes>
           <Footer/>
        </BrowserRouter>
     </div>
     
  </>
   )
}
export default Rutas