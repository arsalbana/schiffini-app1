import ItemProductPromo from '../ItemProductPromo/ItemProductPromo';
import './ItemListPromo.scss';

const ItemListPromo = ({dataProducts}) => {
   
    return (
        <>
            
            <div className="contenedorPromo">
                <div className="textoPromo">
                    <p className="Promo">Nuestras comidas</p>
                </div>
                
                <div className="cardPromo">
                {dataProducts.map( (product) =>{
                    return <ItemProductPromo key={product.id} data={product}/>
                    
                })}
                </div>
            </div>
        </>
    )
}
export default ItemListPromo