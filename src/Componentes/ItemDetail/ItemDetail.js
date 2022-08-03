import React from 'react';
import './ItemDetail.scss';
import {useState } from "react"
import ItemProduct from '../ItemProduct/ItemProduct';
import image from "../../image/papas.jpg"




const ItemDetail= (data) => {
    const {title, precio, imagen, stock, id} = data
    
   const [DetailItem, setDetailItem] = useState([])
    const getItem = new Promise( (resolve, reject) =>{
       setTimeout( () => {
            resolve(DetailItem)
       }, 2000)
        
    })
    getItem
    .then( (res) =>{
        setDetailItem(res)
   })
   .catch( (error) => {
       console.log("falla")
   })
    .finally( () => {

    })
    
    
        return(
            
            <div className='itemDetail'>
                <div className='columnaCuadros'>
                    <div className='fotoChica'><img className='imagenes' src={image} alt="imagen" /></div>
                    <div className='fotoChica'><img className='imagenes' src={image} alt="imagen" /></div>
                    <div className='fotoChica'><img className='imagenes' src={image} alt="imagen" /></div>
                    <div className='fotoChica'><img className='imagenes' src={image} alt="imagen" /></div>
                    <div className='fotoChica'><img className='imagenes' src={image} alt="imagen" /></div>
                </div>
                
                
                <div className='itemDetail1'>
                    
                    <img className='imagenes' src={image} alt="imagen" />
                    <span>{id}</span>
                    
                    <p>Papas fritas</p>
                    <span>$400</span>
                    <button className='botonDetalle'>Comprar</button>
                    
                </div>
                
                
            </div>
        )
        
}
        
        
        
    
export default ItemDetail