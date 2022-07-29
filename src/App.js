
import './App.css';


import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

import NavBar from './Componentes/NavBar/NavBar';




function App() {
  return (
    <div className="App">
        <NavBar/>
       
        <h2>Productos</h2>
        <div className='container'>
          <div className='ItemListContainer'>
            <ItemListContainer />
           
          </div>
          
          
        </div>
    </div>
      
    
  );
}

export default App;

