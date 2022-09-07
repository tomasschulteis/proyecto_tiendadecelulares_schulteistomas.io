
import './App.css';
import Rutas from './components/routes/Rutas';
import {CartProvider} from './components/Context/CartContext'




function App() {
  return(
    <>
      <CartProvider>
        <Rutas/>
      </CartProvider>
    </>
  )
}

export default App;
