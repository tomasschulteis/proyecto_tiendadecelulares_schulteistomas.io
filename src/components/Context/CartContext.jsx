import React, { useState,createContext } from 'react'




export const Cartcontext = createContext({})
export function CartProvider({children}){
  
  const [items,setItems] = useState([]);
  
  function addItem(item,quantity){
      console.log({...item,quantity})
      if (isInCart(item.id)){
        let aux =item;
        let itemIndex = aux.indexof((element)=> element.id === item.id);
        aux [itemIndex].quantity += quantity;
        setItems([...aux])
      }else{setItems([...items, {...item,quantity}]);}
      
    }


    function removeItem(itemId){
      setItems(items.filter((element)=> element.id !=itemId))
    }

    function clear(){
     setItems ([]);
    }


    function isInCart(itemId){
      return items.find((element)=> element.id == itemId);
   
    }




  return (
    <Cartcontext.Provider value={{addItem,removeItem,items,clear}}>
      {children}
    </Cartcontext.Provider>
  )
}

