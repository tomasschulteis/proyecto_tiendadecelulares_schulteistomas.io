import './itemes.css';

import React from 'react';

const Item = ({info}) =>{ 
   return (
         <div className='card'>
            <img src={info.imagen} alt=""/> 
            <p>{info.marca}</p> 
            <p>{info.modelo}</p>
            <p>{info.Precio}</p>
            <button className='button'>Ver detalle del producto</button>
            <hr></hr>
            <p>stock de productos </p>
         </div>
   );
}
export default Item;