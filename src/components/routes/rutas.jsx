import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import '../routes/Rutas.css';
import Cart from "../Cart/Cart";
import CheckOut from "../Checkout/CheckOut";

const Rutas = () => {
   return(
  <>
    <div className="Rutas">
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Ofertas del mes de Agosto"/>} />
              <Route path='/marca/:marcaId' element={<ItemListContainer greeting="Ofertas del mes de Agosto"/>} /> 
              <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
              <Route path="/Cart" element={<Cart/>}></Route>
              <Route path="/checkOut" element={<CheckOut></CheckOut>}></Route>
           </Routes>
        </BrowserRouter>
     </div>
  </>
   )
}
export default Rutas