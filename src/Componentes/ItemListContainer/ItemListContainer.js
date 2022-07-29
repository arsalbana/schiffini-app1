
import ItemList from "../ItemList/ItemList"
import {useState } from "react"
import products from "../../utils/products.mock"


const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const getProducts = new Promise( (resolve, reject) =>{
        setTimeout( () => {
            resolve(products)
        }, 2000)
        
    })
    getProducts
    .then( (res) =>{
        setListProducts(res)
    })
    .catch( (error) => {
        console.log("falla")
    })
    .finally( () => {

    })
    return(
        <div className="item">
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer