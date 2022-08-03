import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.css';
import {Link} from 'react-router-dom'


const NavBar = () => {
    
    return(
        <div className='nav'>
            
            <ul className='items'>
            <h1>Logo</h1>
            
            
            <Link to='/Nosotros'><li>
                <button className="boton">Nosotros</button>
            </li></Link>
            <Link to='/Productos'><li>
                <button className="boton">Productos</button>
            </li></Link>
            <Link to='/Contacto'><li>
                <button className="boton">Contacto</button>
            </li></Link>
            <Link to='/ShoppingCartIcon'><li>
                <button><ShoppingCartIcon /></button>
            </li></Link>
            </ul>
            
            
        </div>
    )    
}
export default NavBar
