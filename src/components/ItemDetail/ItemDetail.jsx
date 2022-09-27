import './Itemdetail.css';
import React, { useState,useContext } from 'react'
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Context/CartContext';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';

export const ItemDetail =({data})=> {
  const [loading, setLoading] = useState(false)
    useEffect(()=>{
     setLoading(true)
     setTimeout(() => {
      setLoading (false)
     
    },1000)
    
  },[])

  const [count,counter] = useState(false);
  const {addItem} = useContext(Cartcontext);
  const onAdd = (quantity) =>{
    counter (!count)
    console.log (`se agrego ${quantity} unidades`)
    addItem(data,quantity)
  }

  return   (
    <div className='fondoo'>
    <ClipLoader  color={'#e25a87'} loading={loading}  size={150} />
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
