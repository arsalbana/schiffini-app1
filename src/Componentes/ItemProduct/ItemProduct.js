import {useState} from 'react'
import './ItemProduct.scss'


const ItemProduct = ({data}) => {
    const {title, precio, imagen, stock, action} = data

    const [contador, setContador] = useState(1)
    const addNumber = () => {
        
        if (contador < 4){
        setContador(contador + 1)
        }
        else {
            alert("no hay más stock")
        }
    }
    const lessNumber = () => {
        if (contador > 0){
        setContador(contador - 1)
        }
        
    }  
    
    return(
        <div className='item'>
            <div className='item1'>
                <img className='imagenes' src={imagen} alt="imagen" />
                <p>{title}</p>
                <span>{precio}</span>
                <p>{stock}</p>
                <div className='countProd'>
                    <button onClick={lessNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
                </div>
                <button onClick={action}>Comprar</button>
            </div>
            
        </div>
    )

}

export default ItemProduct