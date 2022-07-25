import {useEffect, useState} from 'react'
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const ItemProduct = ({title, precio, imagen, stock, action}) => {
   
    
    return(
        <div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                <p>{title}</p>
                <span>{precio}</span>
                <p>{stock}</p>
                <ItemCount />
                <button onClick={action}>Comprar</button>
            </div>
            
        </div>
    )

}

export default ItemProduct