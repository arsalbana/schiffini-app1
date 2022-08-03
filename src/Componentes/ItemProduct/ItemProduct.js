
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemProduct = ({data}) => {
    const {title, precio, imagen, stock, action} = data
    const onAdd = (contador) => {
        alert(`Agregaste ${contador} productos`);
      };
    
    
    return(
        <div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                <p>{title}</p>
                <span>{precio}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={4} />
                
            </div>
            
        </div>
    )

}

export default ItemProduct