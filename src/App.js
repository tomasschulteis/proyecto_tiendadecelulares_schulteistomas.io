import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Ofertas del mes de Agosto"/>
    </div>
  );
}

export default App;
