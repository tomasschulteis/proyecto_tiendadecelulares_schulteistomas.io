import React, {useEffect,useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader"
import {getFirestore,doc,getDoc} from 'firebase/firestore';

/*
const productos = [
  {id: 1, imagen:"/imagenes/samsung_A23_128gb.jpg",stock: 12, marca:"Samsung" ,modelo: "Galaxy A23 128GB Negro",especificaciones:"El Samsung Galaxy A23 es un smartphone Android con una pantalla de 6.6 pulgadas a resolución FHD+, potenciado por un procesador Snapdragon 680 con 4GB, 6GB o 8GB de RAM y 64GB o 128GB de almacenamiento interno. Con una cámara cuádruple con lente principal de 50MP en su dorso, el Galaxy A23 tiene una cámara frontal de 8MP en el notch en forma de V, una batería de 5000 mAh de carga rápida, lector de huellas lateral, y corre Android 12." ,Precio: "$70000"},
  {id: 2,imagen:"/imagenes/iphone-13-Pro.jpg" ,stock: 5,marca: "Iphone", modelo: "IPhone 13 Pro Max 5G 256GB Plateado",especificaciones:"El Apple iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica." , Precio: "$250000"},
  {id: 3,imagen:"/imagenes/redmi-note-10.jpg",stock: 2,  marca:"Xiaomi" ,modelo: "REDMI NOTE 10",especificaciones:"El Xiaomi Redmi 10 es el flagship económico de Xiaomi Con una pantalla IPS de 6.5 pulgadas a resolución FHD+ y tasa de refresco variable de 90Hz, el Redmi 10 está potenciado por un procesador MediaTek Helio G88, con 4GB o 6GB de memoria RAM y 64GB o 128GB de almacenamiento interno no expandible. La cámara del Redmi 10 es cuádruple, con sensor principal de 50MP, lente ultrawide de 8MP, macro de 2MP y un sensor de profundidad de 2MP, mientras que la cámara selfie es de 8MP. El Redmi 10 tiene una batería de 5000 mAh de carga rápida, lector de huellas lateral, radio FM, parlantes duales, y corre MIUI 12.5 basado en Android 11." , Precio: "$72900"}
]*/

export const ItemDetailContainer = () => {

  const [data, setdata] = useState([]);
  const { detalleId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        const querydb = getFirestore();
        const queryDoc=doc(querydb,'Productos',detalleId);
        getDoc(queryDoc) .then(res=> setdata({id: res.id,...res.data()}))
        setLoading(!loading);   
  }, [detalleId]);
  return (
    <div>
      {loading ? (
        <ClipLoader color={"#e25a87"} loading={loading} size={150} />
      ) : (
        <ItemDetail data={data} />
      )}
    </div>
  );
};
export default ItemDetailContainer;