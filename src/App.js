
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './Contexts/CartContext'; 
import Footer from './Componentes/Footer/Footer';
import NavBar from './Componentes/NavBar/NavBar';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Productos from './pages/Productos';
import Details from './pages/Details';
import Checkout from './pages/Checkout';




function App() {
  return (
    <CartProvider>
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
              <Route path='/cart' element={<Checkout />}/>
              <Route path='*' element={<h1>Error 404- not found</h1>} />
              
              
              
            </Routes>
            <Footer />
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;

