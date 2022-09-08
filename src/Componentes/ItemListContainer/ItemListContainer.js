
import ItemList from "../ItemList/ItemList"
import {useState, useEffect } from "react"
import '../ItemProduct/ItemProduct.scss'
import { collection, getDocs, where, query } from "firebase/firestore"
import db from "../../utils/firebaseConfigs"
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
   
    const getProducts = async () => {
        const productCollection = collection(db, 'ItemProduct')
        const productSnapshot = await getDocs (productCollection)
       
        console.log("product snapshot", productSnapshot)
       

    const categoryRef = collection(db, "category");
    

    // Create a query against the collection.
    const q = query(categoryRef, where("category", "==", "Sanguches"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
            let product = doc.data()
            product.id = doc.id
  // doc.data() is never undefined for query doc snapshots
    console.log('productos sanguches',product.id, " => ", product);
    });
        

        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
           
            console.log("producto", product)
            console.log("producto id", product.id)
            
            return product
        })
        return productList
 
    }
   

    useEffect( () => {
        
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
        
    }, [])
    return(
        
        <div className="item">
            
            <ItemList dataProducts={listProducts} />
        </div>
        
    )
}
export default ItemListContainer