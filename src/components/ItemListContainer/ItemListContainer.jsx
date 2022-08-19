import React from 'react'
import ItemCount from '../ItemCount';

export default function ItemListContainer({greeting}) {
  const onAdd = (quantity) =>{
    console.log (`estas llevando $(quantity) unidades`);
  }
  
  return (
    <div>
     <span>{greeting}</span>
     <ItemCount initial={1} stock={5} onadd={onAdd}/>
    </div>
  );
}
