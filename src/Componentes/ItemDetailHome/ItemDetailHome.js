import React, { useState } from 'react';
import './ItemDetailHome.scss'
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailHome = ({data, setShowModal, addProductToCart, productData})  => {
    const {title, precio, stock, image, descripcion } = data

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()

    const onAdd = (contador) => {
        
        alert(`Agregaste ${contador} productos`);
        addProductToCart(productData, contador)
        setCantidadSeleccionada(setCantidadSeleccionada)
    };
    

    

    return (

        <div className='itemDetailHome'>

            

            <div className='itemDetailHome1'>

                <img className='imagenes' src={`/assets/${image}`} alt="imagen" onClick={() => setShowModal(true)} />
            </div> 
            
                
           

            <div className='info'>   
                <p>{title}</p>
                <span>${precio}</span>
                
                
                {cantidadSeleccionada > 0 ? <button className='finalizar'><Link to="/cart">Finalizar Compra</Link></button> : <ItemCount onAdd={onAdd} initial={1} stock={stock}  setCantidadSeleccionada={setCantidadSeleccionada} productData={data} />}



            </div>
            <div>
                <p className='descripcionPromo'>{descripcion}</p>
            </div>
            
    

        </div>
    );

}
        
        
        
    
export default ItemDetailHome