
import ItemList from "../ItemList/ItemList"
import {useState, useEffect } from "react"
import '../ItemProduct/ItemProduct.scss'
import { collection, getDocs, where, query, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
    const [data, setData] = useState([])
    const { categoryParrilla } = useParams();
    
    //const categoryItem = ({data}, category ) => {
    //    return(
    //        <>
    //        {console.log("categorias", data, categoryItem)}
    //        {data.map( (product) =>{
    //            if(product.id && product.category == categoryItem){
    //                return <ItemProduct key = {product.id} data={product}/>
    //            }
    //        })}
            
    //        </>
            
    //    )
    //}
    

    useEffect( () => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'ItemProduct')
        
        if(categoryParrilla) {
            const queryFilter = query(queryCollection, where(categoryParrilla, '==', 'Parrilla', '==', 'category'))

            getDocs(queryFilter)
            .then(
                res => setData(res.docs.map( ItemProduct => ({ id: ItemProduct.id, ...ItemProduct.data() })))
            )
            console.log("categoria", categoryParrilla)
        } else {
            getDocs(queryCollection)
            .then(
                res => setData(res.docs.map( ItemProduct => ({ id: ItemProduct.id, ...ItemProduct.data() }))))
        }
        
       
        
    }, [categoryParrilla])
    return(
        
        <div className="item">
            
            
            <ItemList dataProducts={data} />
        </div>
        
    )
}
export default ItemListContainer