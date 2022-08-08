import React from 'react';
import './ItemDetail.scss';

import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({data}) {
    

    const onAdd = (contador) => {
        alert(`Agregaste ${contador} productos`);
    };



    return (

        <div className='itemDetail'>

            <div className='columnaCuadros'>
                <div className='fotoChica'><img className='imagenes' src={`./image/${data.image}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`./image/${data.image1}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`./image/${data.image2}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`./image/${data.image3}`} alt="imagen" /></div>
                <div className='fotoChica'><img className='imagenes' src={`./image/${data.image4}`} alt="imagen" /></div>
            </div>


            <div className='itemDetail1'>

                <img className='imagenes' src={`./image/${data.imagen}`} alt="imagen" />
            </div> 
            <div className='info'>   
                <p>{data.title}</p>
                <span>${data.precio}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={4} />





            </div>


        </div>
    );

}
        
        
        
    
export default ItemDetail