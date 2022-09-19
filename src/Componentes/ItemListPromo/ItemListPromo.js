import ItemProduct from "../ItemProduct/ItemProduct";
import './ItemListPromo.scss';

const ItemListPromo = ({dataProducts}) => {
   
    return (
        <>
            
            <div className="contenedorListaComidas1">
                <div className="textoComidas1">
                    <p className="comidas1">Nuestras comidas</p>
                </div>
                
                <div className="cardsComidas1">
                {dataProducts.map( (product) =>{
                    return <ItemProduct key={product.id} data={product}/>
                    
                })}
                </div>
            </div>
        </>
    )
}
export default ItemListPromo