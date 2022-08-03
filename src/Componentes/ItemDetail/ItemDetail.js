import React from 'react';
import './ItemDetail.scss';
import {useState } from "react"




const ItemDetail= () => {
    
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
                    <div className='fotoChica'></div>
                    <div className='fotoChica'></div>
                    <div className='fotoChica'></div>
                    <div className='fotoChica'></div>
                    <div className='fotoChica'></div>
                </div>
                
                
                <div className='itemDetail1'>
                    
                    <p>Papas fritas</p>
                    <span>$400</span>
                    <img className='imagenes' src="../../static/hamburguesa.png" alt="imagen" />
                    
                    
                    
                </div>
                
            </div>
        )
        
}
        
        
        
    
export default ItemDetail