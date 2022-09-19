import ItemProductPromo from '../ItemProductPromo/ItemProductPromo';
import './ItemListCategoria.scss';

const ItemListCategoria = ({dataProducts}) => {
   
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
export default ItemListCategoria