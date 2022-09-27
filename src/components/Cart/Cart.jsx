import { Button } from '@chakra-ui/react';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Context/CartContext'
import '../Cart/cart.css'

export const Cart = () => {
   const {items,removeItem,clear} = useContext(Cartcontext);
 
   return (<>
    <div className='fondop'>
      <div className='titulo'>DETALLE DE MI COMPRA:</div>
        {!items.length ? <h2 className='sa'>sin articulos <Link to="/"><Button className='iniciobtn'>Volver</Button></Link></h2> :
      <>
         <ol className='posicion'>
           {items.map(((item,indx)=><li key={indx}>{item.modelo}  ({item.quantity})  {item.Precio}<Button className='botonnremover' onClick={()=>removeItem(item.id)}>Remover</Button></li>))}
         </ol>
         <hr className='linea' ></hr>
         
      </>
     }
      <div className='posicion'>
        <h3 className='pp'>Precio Final: = $ {parseFloat(items.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0))}</h3>
        <Button className='botonnvaciar' onClick={clear}>Vaciar carrito</Button>
        <Link to="/CheckOut"><Button>CheckOut</Button></Link>
      </div>
    </div>
    </>
  )
}
export default Cart