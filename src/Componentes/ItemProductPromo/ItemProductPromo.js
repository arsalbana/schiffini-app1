
import './ItemProductPromo.scss'
import {Link} from 'react-router-dom';

const ItemProductPromo = ({data}) => {
    const {imagen, id} = data

    
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