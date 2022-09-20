
import './Contactanos.scss';
import image from './mapa1.png'





const Contactanos = () => {
     
    return(
      <> 
        <div className='ContenedorContacto'>
            <div className='sombra'>
               
                <div className="itemContacto">
                    <div>
                            <h2>
                                Como llegar
                            </h2>
                        </div>
                        <div className="inputtext">
                            <h3>
                                Av Siempreviva 2233, Lomas de Zamora
                            </h3>
                            
                        </div>
                        <div className="inputtext">
                            <h3>
                                Teléfono de contacto: 
                                1155111111
                            </h3>
                            
                        </div>
                    

                </div>
                <div className='ImagenContacto'>
                    <img className='imagenContacto' src= {image} alt="imagen" />
                            
                </div>
            </div>
        </div>
     </> 
    )
}
export default Contactanos