import './Itemdetail.css';
import React, { useState,useContext } from 'react'
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Context/CartContext';


export const ItemDetail =({data})=> {

  const [count,counter] = useState(false);
  const {addItem} = useContext(Cartcontext);
  const onAdd = (quantity) =>{
    counter (!count)
    console.log (`se agrego ${quantity} unidades`)
    addItem(data,quantity)
  }

  return (
    <div>
     <div className='contenedoruno'>
      <img src={data.imagen} alt=''></img>
    </div>  
    <div className='contenedordos'>
       <p><span className='texto'>Marca: </span><span>{data.marca}</span></p>
       <p><span className='texto'>Modelo: </span>{data.modelo}</p>
       <p><span className='texto'>Detalle: </span>{data.especificaciones}</p>
       <p className='textp'><span className='textop'>Precio: </span>{data.Precio}</p>
       <hr></hr>
       {count ? <div className='notif'>PRODUCTO AGREGADO!</div> : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>}
       <div>
          <Link to="/cart" className='buttonn'>Finalizar Comprar</Link>
       </div>
    </div>
    </div>
  )
}

export default ItemDetail;
