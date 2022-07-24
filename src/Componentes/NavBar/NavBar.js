import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css';

const NavBar = () => {
    
    return(
        <div className='nav'>
            
            <ul className='items'>
            <h1>Logo</h1>
            <img src={`/assets/logo.png`} alt="imagen logo" />
            <li>
                <button className="boton">Nosotros</button>
            </li>
            <li>
                <button className="boton">Productos</button>
            </li>
            <li>
                <button className="boton">Contacto</button>
            </li>
            <li>
                <button><ShoppingCartIcon /></button>
            </li>
            </ul>
            
            
        </div>
    )    
}
export default NavBar
