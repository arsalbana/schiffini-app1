
import ItemList from "../ItemList/ItemList"
import {useState, useEffect } from "react"
import '../ItemProduct/ItemProduct.scss'
import { collection, getDocs } from "firebase/firestore"
import db from "../../utils/firebaseConfigs"



const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const getProducts = async () => {
        const productCollection = collection (db, 'ItemProduct')
        const productSnapshot = await getDocs (productCollection)
        console.log("product snapshot", productSnapshot)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
        
        
    }
    useEffect( () => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
        
    })
    return(
        <div className="item">
            
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer