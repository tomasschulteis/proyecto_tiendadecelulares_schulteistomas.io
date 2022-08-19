import './itemCount.css';
import React,{useState}  from 'react';

export const ItemCount = () => {
    const [count,setCount] = useState(1);
   
    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount (count + 1);
    }
    return(
        <div className='counter'>
         <button disabled={count <=1} onClick={decrease} className='buttondemenosymas'>-</button>
         <span>{count}</span>
         <button disabled={count >= 5} onClick={increase}  className='buttondemenosymas'>+</button>
         <div>
            <button className='button'>Agregar al carrito</button>
         </div>  
        </div>
    )
}

export default ItemCount;