import ItemDetail from "../ItemDetail/ItemDetail"
import React from 'react';
import products from "../../utils/products.mock";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from '../Modal/Modal'



const ItemDetailContainer= () => {
    const {id, category} = useParams ()
    const [showModal, setShowModal] = useState(false)
    

    useEffect( () => {
        filterById()
    }, [id])
    
    const [productData, setProductData] = useState({})
 
    useEffect ( () =>{
        
       filterById()     
        
    }, [])
    const filterById = () =>{
        products.find((productData) => {
            if(productData.id == id){
                setProductData(productData)
                console.log("filtrado" , productData)
            }
        })
    }
    return (
        <div className="container">
            
            <div className={`itemDetail ${showModal ? 'overlay-black' : ''}`}>
            
            <ItemDetail data={productData} setShowModal={setShowModal}/>
            {showModal && (
                <Modal title="Imagen Producto" close={setShowModal}>
                    <img src={`/assets/${productData.image}`} />
                </Modal>
            )}
            </div>
            
        </div>
          
       
    )
}
export default ItemDetailContainer