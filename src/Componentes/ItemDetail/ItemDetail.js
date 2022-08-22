import React, { useState } from 'react';
import './ItemDetail.scss';
import {Link} from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({data, setShowModal, addProductToCart, productData})  => {
    const {title, precio, imagen, stock, id, image, image1, image2, image3, image4} = data

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()

    const onAdd = (contador) => {
        
        alert(`Agregaste ${contador} productos`);
        addProductToCart(productData, contador)
        setCantidadSeleccionada(setCantidadSeleccionada)
    };
    

    

    return (

        <div className='itemDetail'>

            <div className='columnaCuadros'>
                <div className='fotoChica'><img className='imagenes' src={`/assets/${image}`}alt="imagen" onClick={() => setShowModal(true)} /></div>
                
                <div className='fotoChica'><img className='imagenes' src={`/assets/${image1}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/assets/${image2}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/assets/${image3}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/assets/${image4}`} alt="imagen" /></div>
            </div>


            <div className='itemDetail1'>

                <img className='imagenes' src={`/assets/${image}`} alt="imagen" />
            </div> 
            <div className='info'>   
                <p>{title}</p>
                <span>${precio}</span>
                
                <ItemCount onAdd={onAdd} initial={1} stock={stock}  setCantidadSeleccionada={setCantidadSeleccionada} productData={data} />
                <button className="finalizar"><Link to="/cart">Finalizar compra</Link></button>
                




            </div>
            {console.log("cant selecc ..", cantidadSeleccionada)}

        </div>
    );

}
        
        
        
    
export default ItemDetail