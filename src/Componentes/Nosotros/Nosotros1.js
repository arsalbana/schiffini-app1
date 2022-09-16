import image from './descarga.webp';
import {Link} from 'react-router-dom';
import './Nosotros.scss'


const Nosotros1 = () => {
    
    
    return(
        <Link to={`/`}><div className='item'>
            <div className='ImagenNosotros'>
                <img className='imagenes' src= {image} alt="imagen" />
                
            </div>
            
            
        </div></Link>
        
    )

}

export default Nosotros1