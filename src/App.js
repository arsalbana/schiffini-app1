
import './App.css';

import ItemProduct from './Componentes/ItemProduct/ItemProduct';

import NavBar from './Componentes/NavBar/NavBar';




function App() {
  return (
    <div className="App">
        <NavBar/>
       
        <h2>Productos</h2>
        <div className='container'>
          
          <ItemProduct title="Papas fritas" precio="$400" imagen={'papas.jpg'} />
          <ItemProduct title="Hamburguesa completa" precio="$650" imagen={'hamburguesa.jpg'} />
          <ItemProduct title="Ingredientes adicionales" precio="$80" imagen={'ingredientes.jpg'} />
          <ItemProduct title="Ensalada mixta" precio="$400" imagen={'ensalada.jpg'} />
          <ItemProduct title="Sanguche de bondiola" precio="$800" imagen={'bondiola.jpg'} />
        </div>
    </div>
      
    
  );
}

export default App;

