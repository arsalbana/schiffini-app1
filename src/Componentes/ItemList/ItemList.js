import ItemProduct from "../ItemProduct/ItemProduct";
import './ItemList.scss'


const ItemList = ({dataProducts}) => {
    
    return (
        <>
            
            <div className="contenedorListaComidas">
                <div className="textoComidas">
                    <p className="comidas">Nuestras comidas</p>
                </div>
                
                <div className="cardsComidas">
                {dataProducts.map( product =>{
                    return <ItemProduct key={product.id} data={product}/>
                    
                })}
                </div>
            </div>
        </>
    )
}
export default ItemList