import './Itemdetail.css';
import React from 'react'
import ItemCount from '../ItemCount';

const onAdd = (quantity) =>{
  console.log (`estas llevando ${quantity} unidades`);
}

export const ItemDetail =({data})=> {
  return (
    <div>
     <div className='contenedoruno'>
      <img src={data.imagen} alt=""/>
    </div>  
    <div className='contenedordos'>
       <p><span className='texto'>Marca: </span><span>{data.marca}</span></p>
       <p><span className='texto'>Modelo: </span>{data.modelo}</p>
       <p><span className='texto'>Detalle: </span>{data.especificaciones}</p>
       <p className='textp'><span className='textop'>Precio: </span>{data.Precio}</p>
       <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
    </div>
    </div>
  )
}

export default ItemDetail;
