import { CartContext } from '../../Contexts/CartContext';
import { useContext} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../Componentes/NavBar/CartWidget.scss';

const Cart = () => {
    

    const { cartProducts, clear, deleteProduct, totalProducts, totalPrice} = useContext(CartContext)

   
    return(
        <>
        <div>Carrito de checkout</div>
        <div className='cart-widget' >
           
           
                {cartProducts.map((product) => {
                    return(
                        <div className='CartProductIn' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='CartProductDetail'>
                                <p>{product.title}</p>
                                
                            </div>
                            <div className='CartProductDetail'>
                                <p>$ {product.precio}</p>
                            </div>
                            
                            
                            <div className='CartProductAction' >
                                <DeleteIcon onClick={() => deleteProduct(product)}/>
                            </div>
                        </div>
                    )
                })}
                <div className='CartProductDetail'>
                                <p> Total Productos:  {totalProducts}</p>
                </div>
                <div className='CartProductDetail'>
                                <p> Precio total:  {totalPrice}</p>
                </div>
                <button onClick={() => clear()} className={"btn-delete-all"}>Terminar Compra</button>
                
            
        </div>
        </>
    )
}

export default Cart