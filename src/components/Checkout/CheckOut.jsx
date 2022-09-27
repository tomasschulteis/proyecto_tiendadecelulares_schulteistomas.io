import React,{useContext,useEffect,useState} from 'react';
import { Cartcontext } from '../Context/CartContext';
import {addDoc,collection,getFirestore,getDoc,doc,getDocs} from 'firebase/firestore';
import "../Checkout/Checkout.css"
export default function CheckOut() {
  const {items} = useContext(Cartcontext);
  const db = getFirestore();
   const valorInicial= {
    Name: '',
    Surname:'',
    Documento:'',
    Email:'',
    Phone:'',
    Adress:'',
    Provincia:'',
    Localidad:'',
    Codigopostal:'',
    Checkbox:'',
    Articulo: items.map(item=>({id:item.id, modelo:item.modelo, precio:item.Precio, unidades:item.quantity, marca:item.marca})), 
    Importefinal:(items.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0))
   }

   const [compras,setCompras]= useState(valorInicial)
   const [receivedata,setreceivedata]= useState([])

   const inputs = (e) => {const {name,value}= e.target;
    setCompras({...compras,[name]:value})
  }

   const saveData= async(e)=>{
    e.preventDefault();
    try{
      await addDoc(collection(db,'Compras'),{...compras})
    }catch(error){console.log(error)};
    
    setCompras({...valorInicial})
   }

   useEffect(()=>{const getreceived= async()=>{
   try{
    const querySnapshot = await getDocs(collection(db,'Compras'))
    const docs = []
    querySnapshot.forEach ((doc)=>{
      docs.push({...doc.data(),id:doc.id})
    })
     setreceivedata(docs)
   }catch (error){
    console.log(error)
   }
   }
   getreceived()
  },[])
  
    return (
    <>
     <div className='fondp'>
       <div className='tituloform'>COMPLETA TU COMPRA:</div>
       <form className='formregister' onSubmit={saveData}>
          <input className='controls' name='Name' onChange={inputs} value={compras.Name} type="Text" placeholder="NOMBRE"></input>
          <input className='controls' name='Surname' onChange={inputs} value={compras.Surname} type="Text" placeholder="APELLIDO"></input>
          <input className='controls' name='Documento' onChange={inputs} value={compras.Documento} type="number" placeholder="D.N.I"></input>
          <input className='controls' name='Email' onChange={inputs} value={compras.Email} type="email" placeholder="EMAIL"></input>
          <input className='controls' name='Phone' onChange={inputs} value={compras.Phone} type="number" placeholder="CELULAR"></input>
          <input className='controls' name='Adress' onChange={inputs} value={compras.Adress} type="Text" placeholder="DIRECCION"></input>
          <input className='controls' name='Provincia' onChange={inputs} value={compras.Provincia} type="Text" placeholder="PROVINCIA"></input>
          <input className='controls' name='Localidad' onChange={inputs} value={compras.Localidad} type="Text" placeholder="LOCALIDAD"></input>
          <input className='controls' name='Codigopostal' onChange={inputs} value={compras.Codigopostal} type="number" placeholder="CODIGO POSTAL" ></input>
          <ol className='controlss'>
            {items.map(((item,indx)=><li key={indx}>{item.modelo}  ({item.quantity}) </li>))}
          </ol>
          <div><input className='terminos' name='checkbox' onChange={inputs} value={compras.Checkbox} type="Checkbox"/><a className='terminos' href='/'>Acepto Terminos y Condiciones.</a></div>         
          <h3 className='preciof'>Precio Final: = $ {parseFloat (items.reduce((pv,cv)=> pv + parseFloat(cv.Precio.replace("$","") * parseFloat(cv.quantity)),0))}</h3>
         <button className='btnpagar'>CONFIRMAR PAGO</button>
       </form>
       <div>
         <div>
           {
            receivedata.map(received=>(
              <div key={received.id}>
                <p>id: {received.id}</p>
                <p>NOMBRE:{received.Name}</p>
                <p>APELLIDO:{received.Surname}</p>
              </div>
            ))
           }
         </div>
       </div>
      </div>
    </>
  )
}
