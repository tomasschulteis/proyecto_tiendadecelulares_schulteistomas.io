import React, {useContext} from 'react'
import { Cartcontext } from '../Context/CartContext'
import "../Cartwidget/Cartwidget.css"
import { Link } from 'react-router-dom';
export default function Cartwidget() {
  const {items} = useContext(Cartcontext);
  return (
    <div className='a' >
       <Link to={"/Cart"} ><button 
         isplay={{ base: 'none', md: 'inline-flex' }}
         fontSize={'sm'}
         fontWeight={600}
         color={'white'}
         bg={'pink.400'}
         href={'#'}
         _hover={{
          bg: 'pink.300',
          }}>
          <svg className='carrito'   xmlns="http://www.w3.org/2000/svg" width="45" height="30" fill="currentColor"  viewBox="0 0 16 16">
            <path   d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>       
          </svg>
           <span>{items.reduce((pv, cv)=> pv + cv.quantity,0)}</span>  
       </button>
       </Link>
  </div>
  )
}

