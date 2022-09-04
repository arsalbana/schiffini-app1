
import './NavBar.scss';
import {Link} from 'react-router-dom';
import image from "../../image/logo con tipografia.png"
import CartWidget from './CartWidget'


const NavBar = () => {
    
    return(
        <div className='nav'>
            
            <ul className='items1'>
            <Link to='/'> <div className='logo'><img className='logoa' src={image} alt='imagenLogo'/></div></Link>
            
            
            <Link to='/Nosotros'><li>
                <button className="boton">Nosotros</button>
            </li></Link>
            <Link to='/Productos'><li>
                <button className="boton">Productos</button>
            </li></Link>
            <Link to='/Contacto'><li>
                <button className="boton">Contacto</button>
            </li></Link>
            <li>
                <button className='CartProductIn'><CartWidget /></button>
            </li>
            </ul>
            
            
        </div>
    )    
}
export default NavBar
