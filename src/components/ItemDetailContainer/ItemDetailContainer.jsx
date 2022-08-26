import React, {useState, useEffect} from 'react'
import {useparams} from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';

export function ItemDetailContainer() {
  const {id} = useparams ();
  const [item,setItem] = useState ({})
   useEffect(() => {
    const productos = [
      {id: 1, imagen:"https://http2.mlstatic.com/D_NQ_NP_798686-MLA50207299147_062022-O.webp",stock: 12, marca:"Samsung" ,modelo: "Galaxy A23 128GB Negro", Precio: "$70000"},
      {id: 2,imagen:"https://http2.mlstatic.com/D_NQ_NP_816480-MLA47777273514_102021-O.webp" ,stock: 5,marca: "Iphone", modelo: "IPhone 13 Pro Max 5G 256GB Plateado", Precio: "$250000"},
      {id: 3,imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_773268-MLA50421440914_062022-F.webp",stock: 2,  marca:"Xiaomi" ,modelo: "REDMI NOTE 10", Precio: "$72900"}]  
      new Promise((resolve) => {
        setTimeout(()=>{
          resolve(productos);
        },2000)
      }).then((data)=>{
       productos.find((element)=>element.id == id) 

       setItem(data);
      })
    }, [id])
  
  return (
    <>
      {Object.getOwnPropertyNames(item).length && <ItemDetail item={item}/>}
    </>
  )
}
