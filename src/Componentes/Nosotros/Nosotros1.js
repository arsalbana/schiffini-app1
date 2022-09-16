import image from './descarga.webp';
import {Link} from 'react-router-dom';
import './Nosotros.scss'


const Nosotros1 = () => {
    
    
    return(
        <>
            <div>
                <h1>
                    Bienvenidos a Parrilla De Gauchos
                </h1>
            </div>
            <Link to={`/`}><div className='item'>
                <div className='ImagenNosotros'>
                    <img className='imagenes' src= {image} alt="imagen" />
                    
                </div>
                
            </div></Link>
            <div className='divArriba'>
                
                <p>
                    De Gauchos es una empresa familiar que lleva abierta 40 años.
                    Nuestro restaurante es un espacio donde toda la familia puede disfrutar acompañada de la mejor parrilla Argentina.
                </p>
            </div>
        </>
    )

}

export default Nosotros1