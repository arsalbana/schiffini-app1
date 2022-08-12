
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom';


const ItemProduct = ({data}) => {
    const {title, precio, imagen, stock, id, image, image1, image2, image3, image4} = data
    const onAdd = (contador) => {
        alert(`Agregaste: ${contador} productos`);
      };


    
    return(
        <Link to={`/productos/${id}`}><div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                
            
                <p>{title}</p>
                <span>{precio}</span>
                <ItemCount onAdd={onAdd} initial={1} stock={4} />
                
            </div>
            
        </div></Link>
    )

}

export default ItemProduct