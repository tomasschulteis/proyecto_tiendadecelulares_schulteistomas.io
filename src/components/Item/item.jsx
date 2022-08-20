import './itemes.css';

import React from 'react';
import ItemCount from '../ItemCount';

const onAdd = (quantity) =>{
   console.log (`estas llevando ${quantity} unidades`);
 }
const Item = ({info}) =>{ 
   return (
         <div className='card'>
            <img src={info.imagen} alt=""/> 
            <p>{info.marca}</p> 
            <p>{info.modelo}</p>
            <p>{info.Precio}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
         </div>
   );
}
export default Item;