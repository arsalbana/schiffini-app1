
import './Contactanos.scss';





const Contactanos = () => {
     
    return(
      <> 
        <div className="itemContacto">
            <div>
                    <h2>
                        Contactanos
                    </h2>
                </div>
                <div className="inputtext">
                    <h3>
                        Nombre
                    </h3>
                    <input type="nombre" name="nombre"/>
                </div>
                <div className="inputtext">
                    <h3>
                        Apellido
                    </h3>
                    <input type="apellido" name="apellido"/>
                </div>
                <div className="inputtext">
                    <h3>
                        Mail
                    </h3>
                    <input type="mail" name="mail"/> 
                </div>
                <div className="comentarios">
                    <h3>
                        Comentarios
                    </h3>
                    <input type="Comentarios" name="comentarios"/>
                </div>
                <div className="button2">
                    
                        <button type="submit">Enviar</button>
                    
                </div>
            

        </div>
     </> 
    )
}
export default Contactanos