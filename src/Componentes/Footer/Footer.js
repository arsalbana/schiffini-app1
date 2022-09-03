import '../Footer/Footer.scss';
import {Link} from 'react-router-dom';
import image from "../../image/logo con tipografia.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer= () => {
    
    return(
        <div className='foo'>
            
            <ul className='item2'>
            <Link to='/'> <div className='logo'><img className='logob' src={image} alt='imagenLogo'/></div></Link>
            
            <div className='filaNav'>
                <Link to='/Nosotros'><li>
                    <button className="boton">Nosotros</button>
                </li></Link>
                <Link to='/Productos'><li>
                    <button className="boton">Productos</button>
                </li></Link>
                <Link to='/Contacto'><li>
                    <button className="boton">Contacto</button>
                </li></Link>
            </div>
            
            <div className='Redes'>
                <li> <InstagramIcon/> </li>
                <li> <FacebookIcon/> </li>
                <li> <WhatsAppIcon/> </li>
            </div>
            
            
            </ul>
            
            
        </div>
    )    
}
export default Footer