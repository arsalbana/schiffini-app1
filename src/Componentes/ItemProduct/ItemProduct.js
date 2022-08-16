import { useContext } from 'react';
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';

const ItemProduct = ({data, action}) => {
    const {title, precio, imagen,  id} = data
    const { handleClick, name } = useContext(CartContext)
    const onAdd = (contador) => {
        alert(`Agregaste: ${contador} productos`);
      };

const addProductToCart = (e) => {
    console.log("evento add to cart ", e)
    e.stopPropagation ();
}
    
    return(
        <Link to={`/productos/${id}`}><div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                
            
                <p>{title}</p>
                <span onClick={addProductToCart}>$ {precio}</span>
                <ItemCount onAdd={onAdd} onClick={addProductToCart} initial={1} stock={4} />
                
                
            </div>
            
        </div></Link>
    )

}

export default ItemProduct