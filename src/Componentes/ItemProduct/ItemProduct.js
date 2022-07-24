import './ItemProduct.scss'
const ItemProduct = ({title, precio, imagen}) => {
    return(
        <div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                <p>{title}</p>
                <span>{precio}</span>
                <button>Comprar</button>
            </div>
            
        </div>
    )

}

export default ItemProduct