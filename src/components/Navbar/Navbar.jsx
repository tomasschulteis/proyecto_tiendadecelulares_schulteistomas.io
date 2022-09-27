import React from 'react'
import * as Router from 'react-router-dom'
import Cartwidget from '../Cartwidget/Cartwidget';
import { Link } from 'react-router-dom';
import "../Navbar/Navbar.css"
export default function Navbar() {
  return (
    <div className='background'>
     <div className="nav">
       <ul className="">
        <Link to={"/"} className='nav-logo'>MARKETPHONE</Link>
           <li>
             <Router.Link className='a' to={"/"}>
                Inicio
              </Router.Link>
           </li>
           <li className=''>
             <Router.Link className='a' to={"/"}>Catalogo</Router.Link>
              <ul>
                  <li>
                    <Router.Link className='a' to={"/marca/Apple"}>
                       Apple
                     </Router.Link>
                  </li>
                  <li>
                      <Router.Link className='a' to={"/marca/Motorola"}>
                          Motorola
                       </Router.Link>
                  </li>
                  <li>
                     <Router.Link className='a' to={"/marca/Samsung"}>
                        Samsung
                     </Router.Link>
                   </li>
                  <li>
                      <Router.Link className='a' to={"/marca/Xiaomi"}>
                         Xiaomi
                      </Router.Link>
                   </li> 
               </ul>
            </li>
            <li>
               <Cartwidget className='a' ></Cartwidget>
            </li>  
       </ul>
     </div>
    </div>
  )
}
