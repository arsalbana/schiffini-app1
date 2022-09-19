import ItemListCategoria from "../ItemListCategoria/ItemListCategoria"
import ItemListPromo from "../ItemListPromo/ItemListPromo"
import {useState, useEffect } from "react"
import './ItemListContainerHome.scss';
import '../ItemProductPromo/ItemProductPromo.scss'
import { collection, getDocs, where, query, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";



const ItemListContainerHome = () => {
    const { category} = useParams();
    const [data, setData] = useState([])
    useEffect( () => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Promo')
        
        if(category) {
            const queryFilter = query(queryCollection, where(category, '==', 'Promo', '==', 'category'))

            getDocs(queryFilter)
            .then(
                res => setData(res.docs.map( ItemProduct => ({ id: ItemProduct.id, ...ItemProduct.data() })))
            )
           
        } else {
            getDocs(queryCollection)
            .then(
                res => setData(res.docs.map( ItemProduct => ({ id: ItemProduct.id, ...ItemProduct.data() }))))
        }
        
       
        
    }, [category])

    return(
        <>
            <div className="itemHome">
                
                
                <ItemListPromo dataProducts={data} />
            </div>
        
            <div className="itemHome">
                
                
                <ItemListCategoria dataProducts={data} />
            </div>
       </> 
    )
}
export default ItemListContainerHome