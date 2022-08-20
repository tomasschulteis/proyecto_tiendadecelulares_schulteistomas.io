import './itemCount.css';
import React,{useState}  from 'react';

export const ItemCount = ({initial,stock,onAdd}) => {
    
    const [count,setCount] = useState(initial);
   
    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount (count + 1);
    }
    return(
        <div className='counter'>
         <button disabled={count <=initial} onClick={decrease} className='buttondemenosymas'>-</button>
         <span>{count}</span>
         <button disabled={count >= stock} onClick={increase}  className='buttondemenosymas'>+</button>
         <div>
            <button disabled={stock <= 0} onClick={() => onAdd(count)} className='button'>Agregar al carrito</button>
         </div>  
        </div>
    )
}

export default ItemCount;