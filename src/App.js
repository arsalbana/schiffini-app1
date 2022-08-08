
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from './Componentes/NavBar/NavBar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Details from './pages/Details';




function App() {
  return (
    <BrowserRouter>
      
          <NavBar/>
          <Routes>
            <Route path='/' element={
              <Home />
            } />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/:category/:id' element={<Details />} />
            <Route path='*' element={<h1>Error 404- not found</h1>} />
            
          
            
          </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;

