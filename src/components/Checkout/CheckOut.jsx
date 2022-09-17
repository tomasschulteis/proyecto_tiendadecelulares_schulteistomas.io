import React,{useContext,useState} from 'react';
import { Cartcontext } from '../Context/CartContext';
import {addDoc,collection,getFirestore} from 'firebase/firestore';

export default function CheckOut() {
   
    const {Cart} = useContext (Cartcontext);
    const [name,setName] =useState('');
    const [surname,setSurname] =useState('');
    const [documento,setDocumento] =useState('');
    const [email,setEmail] =useState('');
    const [phone,setPhone] =useState('');
    const [adress,setAdress] =useState('');
    const [provincia,setProvincia] =useState('');
    const [localidad,setLocalidad] =useState('');
    const [codigopostal,setCodigopostal] =useState('');

    function finalizarCompra(){
       const db= getFirestore();
        let order = {buyer: {name,surname,documento,email,phone,adress,provincia,localidad,codigopostal}, items: Cart, total:Cart.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0)}
        const orderCollection = collection(db,'orderd');
        addDoc (orderCollection,order).then(({id})=> {
            console.log(id)
        })
    }
  
    return (
    <>
     <div>CheckOut</div>
     <form onSubmit={onsubmit}>
        <input value={name} onChange={(e) => setName(e.value)} type={"Text"} placeholder="NOMBRE"></input>
        <input value={surname} onChange={(e) => setSurname(e.value)} type={"Text"} placeholder="APELLIDO"></input>
        <input value={documento} onChange={(e) => setDocumento(e.value)} type={"number"} placeholder="D.N.I"></input>
        <input value={email} onChange={(e) => setEmail(e.value)} type={"email"} placeholder="EMAIL"></input>
        <input value={phone} onChange={(e) => setPhone(e.value)} type={"number"} placeholder="CELULAR"></input>
        <input value={adress} onChange={(e) => setAdress(e.value)} type={"Text"} placeholder="DIRECCION"></input>
        <input value={provincia} onChange={(e) => setProvincia(e.value)} type={"Text"} placeholder="PROVINCIA"></input>
        <input value={localidad} onChange={(e) => setLocalidad(e.value)} type={"Text"} placeholder="LOCALIDAD"></input>
        <input value={codigopostal} onChange={(e) => setCodigopostal(e.value)} type={"number"} placeholder="CODIGO POSTAL" ></input>
        <button onClick={finalizarCompra}>Pagar</button>
     </form>
    </>
  )
}
