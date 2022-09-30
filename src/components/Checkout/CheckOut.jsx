import React,{useContext,useState} from 'react';
import {addDoc,collection,getFirestore,} from 'firebase/firestore';
import { Cartcontext } from '../Context/CartContext';
import Swal from 'sweetalert2';
import "../Checkout/Checkout.css"
export default function CheckOut() {
   const {items} = useContext(Cartcontext);
   const [Name,setName]= useState('')
   const [Surname,setSurname]=useState('')
   const [Documento,setDocumento]=useState('')
   const [Email,setEmail]=useState('')
   const [Phone,setPhone]=useState('')
   const [Adress,setAdress]=useState('')
   const [Provincia,setProvincia]=useState('')
   const [Localidad,setLocalidad]=useState('')
   const [Codigopostal,setCodigopostal]=useState('');
   const Lista ={articulos:items.map(item=>({id:item.id, modelo:item.modelo, precio:item.Precio, unidades:item.quantity, marca:item.marca})),}
   const Importefinal = {importefinal:  (items.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0))}

   function handleclick(){
     const pedido ={
     buyer:{ Name: Name, Surname: Surname,Documento: Documento, Email: Email, Phone: Phone, Adress:Adress, Provincia: Provincia, Localidad: Localidad, Codigopostal:Codigopostal,Lista,Importefinal},
    }
    if (!Name||!Surname||!Documento||!Email||!Phone||!Adress||!Provincia||!Localidad||!Codigopostal)return;

   const db = getFirestore ();
   const collectionRef = collection(db,'pedidos');

   
   addDoc(collectionRef,pedido).then(({id})=> Swal.fire({icon:'success',title:'Su compra se registro con exito acontinuacion le brindamos su N° de orden:',text: id,footer:'<b>en breve nos estaremos contactando por Email</b>'}));
 }
  
 
   
  
    return (
    <>
     <div className='fondp'>
          <h2 className='tituloform'>COMPLETA TU COMPRA:</h2>
           <div  className='formregister'>
             <input className='controls' onChange={(e)=>setName(e.target.value)} type={'text'} placeholder="NOMBRE"></input>
             <input className='controls' onChange={(e)=>setSurname(e.target.value)} type={'text'} placeholder="APELLIDO"></input>
             <input className='controls' onChange={(e)=>setDocumento(e.target.value)} type={'number'} placeholder="D.N.I"></input>
             <input className='controls' onChange={(e)=>setEmail(e.target.value)} type={'email'} placeholder="EMAIL"></input>
             <input className='controls' onChange={(e)=>setPhone(e.target.value)} type={'number'} placeholder="CELULAR"></input>
             <input className='controls' onChange={(e)=>setAdress(e.target.value)} type={'text'} placeholder="DIRECCION"></input>
             <input className='controls' onChange={(e)=>setProvincia(e.target.value)} type={'text'} placeholder="PROVINCIA"></input>
             <input className='controls' onChange={(e)=>setLocalidad(e.target.value)} type={'text'} placeholder="LOCALIDAD"></input>
             <input className='controls' onChange={(e)=>setCodigopostal(e.target.value)} type={'number'} placeholder="CODIGO POSTAL" ></input>
             <ol className='controlss'>
               {items.map(((item,indx)=><li key={indx}>{item.modelo}  ({item.quantity}) </li>))}
             </ol>
             <div><input className='terminos' name='checkbox'  type="Checkbox"/><a className='terminos' href='/'>Acepto Terminos y Condiciones.</a></div>         
             <h3 className='preciof'>Precio Final: = $ {parseFloat (items.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0))}</h3>
             <button className='btnpagar' onClick={handleclick}>CONFIRMAR PAGO</button>
           </div>
      </div>
    </>
  )
}
