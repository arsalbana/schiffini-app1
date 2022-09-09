
import './ItemProduct.scss'
import {Link} from 'react-router-dom';

const ItemProduct = ({data}) => {
    const {title, precio, imagen, id, category} = data

    
    return(
        <Link to={`/productos/${id}`}><div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                <p>{title}</p>
                <span>$ {precio}</span>
                <button>
                    Ver producto
                </button>
            </div>
            
        </div></Link>
        
    )

}

export default ItemProduct