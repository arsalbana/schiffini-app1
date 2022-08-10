import ItemDetail from "../ItemDetail/ItemDetail"
import React from 'react';
import products from "../../utils/products.mock";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"




const ItemDetailContainer= () => {
    const {id, category} = useParams ()
    
    const [productData, setProductData] = useState({})
 
    useEffect ( () =>{
        
       filterById()     
        
    }, [])
    const filterById = () =>{
        products.find((product) => {
            if(product.id == id){
                setProductData(product)
                console.log("filtrado" , product)
            }
        })
    }
    return (
        <div className="container">
            
            <div className="itemDetail">
            <ItemDetail data={productData} />

            </div>
            
        </div>
          
       
    )
}
export default ItemDetailContainer