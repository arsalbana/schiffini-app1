import React from 'react';
import './ItemDetail.scss';

import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({data}) {
    const {title, precio, imagen, stock, id, image, image1, image2, image3, image4} = data

    const onAdd = (contador) => {
        alert(`Agregaste ${contador} productos`);
    };



    return (

        <div className='itemDetail'>

            <div className='columnaCuadros'>
                <div className='fotoChica'><img className='imagenes' src={`./public/${image}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/public/${image1}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/public/${image2}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/public/${image3}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`/public/${image4}`} alt="imagen" /></div>
            </div>


            <div className='itemDetail1'>

                <img className='imagenes' src={`/public/${imagen}`} alt="imagen" />
            </div> 
            <div className='info'>   
                <p>{title}</p>
                <span>${precio}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={4} />





            </div>


        </div>
    );

}
        
        
        
    
export default ItemDetail