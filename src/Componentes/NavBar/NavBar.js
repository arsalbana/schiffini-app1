import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './NavBar.scss';
import {Link} from 'react-router-dom';
import image from "../../image/logo burgourmet.png"


const NavBar = () => {
    
    return(
        <div className='nav'>
            
            <ul className='items'>
            <Link to='/'> <div className='logo'><img className='logob' src={image} alt='imagenLogo'/> <p className="textoLogo">Burgourmet</p></div></Link>
            
            
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
