import './ItemListContainerHome.scss'
import ItemListPromo from "../ItemListPromo/ItemListPromo"
import {useState, useEffect } from "react"
import './ItemListContainerHome.scss';
import '../ItemProductPromo/ItemProductPromo.scss'
import { collection, getDocs, where, query, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import imagen from './aceitunas.png';
import imagen1 from './achuras.png';
import imagen2 from './achuras1.png';


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
        
            <div className="itemCategory">
                <Link to={`/productos/categoria`}> 
                    <div>

                    </div>
                    <div className="contenedorCategory">
                    <p className="Category">Parrilla</p>
                    <img className='imagenes' src={imagen} alt="imagen" />
                    
                    </div> 
                </Link>
                <Link to={`/productos/categoria`}> 
                    <div className="contenedorCategory">
                    <p className="Category">Guarniciones</p>
                    <img className='imagenes' src={imagen1} alt="imagen" />
                    
                    
                    </div> 
                </Link>
                <Link to={`/productos/categoria`}> 
                    <div className="contenedorCategory">
                    <p className="Category">Sanguches</p>
                    <img className='imagenes' src={imagen2} alt="imagen" />
                    
                    </div> 
                </Link>
                
            </div>
       </> 
    )
}
export default ItemListContainerHome