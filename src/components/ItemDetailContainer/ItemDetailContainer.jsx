import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {
  const {prodd} = useParams ();
  const [item,setItem] = useState ({});
   useEffect(() => {
    const productos = [
      {id: 1, imagen:"https://http2.mlstatic.com/D_NQ_NP_798686-MLA50207299147_062022-O.webp",stock: 12, marca:"Samsung" ,modelo: "Galaxy A23 128GB Negro", Precio: "$70000"},]
      new Promise((resolve) => {
        setTimeout(()=>{
          resolve(productos);
        },2000)
      }).then((data)=>{
       productos.find((element)=>element.id === prodd) 

       setItem(data);
      })
    }, [prodd])
  
  return (
    <>
      {Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
    </>
  )
}
