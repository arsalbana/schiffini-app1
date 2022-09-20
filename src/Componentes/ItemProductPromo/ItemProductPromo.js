
import './ItemProductPromo.scss'
import {Link} from 'react-router-dom';

const ItemProductPromo = ({data}) => {
    const {title, precio, imagen, id, category} = data

    
    return(
        <Link to={`/${id}`}><div className='itemHome'>
            <div className='card'>
                <img className='img' src={imagen} alt="imagen" />
                
                <button>
                    Ver producto
                </button>
            </div>
            
        </div></Link>
        
    )

}

export default ItemProductPromo