import React, { useEffect,useState } from 'react'
import ItemList from '../ItemList/ItemList';
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from 'react-router-dom';
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore';
/*const productos = [
  {id: 1, imagen:"/imagenes/samsung_A23_128gb.jpg",stock: 12, marca:"Samsung" ,modelo: "Galaxy A23 128GB Negro", Precio: "$70000"},
  {id: 2,imagen:"/imagenes/iphone-13-Pro.jpg" ,stock: 5,marca: "Apple", modelo: "IPhone 13 Pro Max 5G 256GB Plateado", Precio: "$250000"},
  {id: 3,imagen:"/imagenes/redmi-note-10.jpg",stock: 2,  marca:"Xiaomi" ,modelo: "REDMI NOTE 10", Precio: "$72900"}]
  */

 export default function ItemListContainer({greeting}) {  
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
     setLoading(true)
     setTimeout(() => {
      setLoading (false)
     
    },2000)
    
  },[])
   
  
  const [data, setData] = useState ([]);

  const {marcaId} = useParams();
  
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection=collection(querydb,'Productos');
    if (marcaId){
      const queryFilter = query(queryCollection,where('marca','==',marcaId))
      getDocs(queryFilter)
         .then(res => setData(res.docs.map(producto=> ({id: producto.id, ...producto.data()}))))
    }else {
      getDocs(queryCollection)
          .then(res => setData(res.docs.map(producto=> ({id: producto.id, ...producto.data()}))))
     }
  }, [marcaId])
  
  return (
    <div>
     <span>{greeting}</span>
     <ClipLoader color={'#e25a87'} loading={loading}  size={150} />
     <ItemList  data={data}/>
    </div>
  );

}

