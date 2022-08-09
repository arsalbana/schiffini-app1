
import './Item.scss'
import './ItemProduct.scss'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({data}) => {
    const {title, precio, imagen, image1, image2, image3, image4, image, stock, id} = data
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
export default Item