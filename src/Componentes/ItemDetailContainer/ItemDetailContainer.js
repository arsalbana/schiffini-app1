import ItemDetail from "../ItemDetail/ItemDetail"
import React from 'react';
import products from "../../utils/products.mock";
import { useEffect } from "react";
import { useParams } from "react-router-dom"




const ItemDetailContainer= () => {
    
    console.log('productos desde detalle', products)
    console.log('useParams: ', useParams())
    const {id, category} = useParams ()
    console.log("id parametro: ", id, 'categoria de parametro:', category)
    useEffect ( () =>{
        products.some( (product) => {
            if(product.id === 2) {
                console.log("producto filtrado ", product)
                return (
                    
                    product
                )
            }
        })
        
    })
    return (
        <div className="container">
            <div className="itemDetail">
                <ItemDetail />
            </div>  
        </div>
          
       
    )
}
export default ItemDetailContainer