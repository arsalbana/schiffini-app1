import { CartContext } from '../../Contexts/CartContext';
import { useContext, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../Componentes/NavBar/CartWidget.scss';
import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal'

const Cart = () => {
    
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, clear, deleteProduct, totalProducts, totalPrice} = useContext(CartContext)
    const [order, setOrder] = useState({
        items : cartProducts.map((product) => {
            return {
                id : product.id,
                title : product.title,
                precio : product.precio
            }
        }),
        buyers: {},
        total: totalPrice 
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })
    
const handleChange = (e) =>{
    console.log("valor name", e.target.name)
    setFormData ({ ...formData, [e.target.name] : e.target.value })
    console.log("formData", formData)
}

    return(
        <>
        <div>Carrito de checkout</div>
        
        <div className='cart-widget' >
        {console.log("order:", order)}
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

                {totalProducts > 0 ? <button className='finalizar'><Link to="/">Finalizar Compra</Link></button> : <Link to="/">  <p> No hay productos en el carrito </p> </Link>}
                
                {showModal &&
                <Modal title = "Datos de contacto" close={ () => setShowModal()}>
                    <form>
                        
                        <input type='text'name='name' placeholder ='nombre' order={formData.name} onChange={handleChange} />
                        <input type='number'name='phone' placeholder = 'numero' order={formData.phone} onChange={handleChange} />
                        <input type='email'name='email' placeholder = 'email' order={formData.email} onChange={handleChange} />
                        <button>Enviar</button>
                        
                    </form>
                </Modal>
                }
                 <div className="Subtotal">
                    <button onClick={() => setShowModal(true)}> Pagar</button>
                    <div className="ResumenPedido">
                        <h3>Resumen de pedido</h3>
                        <div className="itemPedido">
                            <p>2 PRODUCTOS</p>
                            <p>$ 60.000</p>
                        </div>
                        <div className="itemPedido">
                            <p>Costo de Delivery $200</p>
                        </div>
                        <div className="itemPedido">
                            <p>TOTAL</p>
                            <p>$ 60.000</p>
                        </div>
                    </div>
                </div>
                
            
        </div>
        </>
    )
}

export default Cart