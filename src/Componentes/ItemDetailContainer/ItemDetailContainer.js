import ItemDetail from "../ItemDetail/ItemDetail"
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfigs';
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer= () => {
    const {id} = useParams ()
    const [showModal, setShowModal] = useState(false)
    

    
    
    const [productData, setProductData] = useState({})
 
    useEffect ( () =>{
    
       getProduct()  
       .then((res) => {
            setProductData(res)
       }) 
        
    }, [id])
    

    const getProduct = async () => {
        const querydb = getFirestore();
        const docRef = doc(querydb, 'ItemProduct', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        console.log('data con id', product)
        return product
  
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