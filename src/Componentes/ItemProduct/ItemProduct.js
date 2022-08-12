
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';


const ItemProduct = ({data}) => {
    const {title, precio, imagen,  id} = data
    const onAdd = (contador) => {
        alert(`Agregaste: ${contador} productos`);
      };

const addToCart = (e) => {
    console.log("evento add to cart ", e)
    e.stopPropagation ()
}
    
    return(
        <Link to={`/productos/${id}`}><div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                
            
                <p>{title}</p>
                <span>{precio}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={4} />
                <button onClick={addToCart}>Añadir al carrito</button>
                
            </div>
            
        </div></Link>
    )

}

export default ItemProduct