import { CartContext } from '../../Contexts/CartContext';
import { useContext, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss';
import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfigs.js';
import {collection, addDoc} from 'firebase/firestore'

const Cart = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const { cartProducts, clear, deleteProduct, totalProducts, totalPrice} = useContext(CartContext)
    const [order, setOrder] = useState({
        items : cartProducts.map((product) => {
            return {
                id : product.id,
                title : product.title,
                precio : product.precio,
                cantidad: product.contador,
            }
        }),
        buyers: {},
        date: new Date().toLocaleDateString(),
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

const submitData = (e) => {
    e.preventDefault()
    console.log("orden para enviar: ", {...order, buyer: formData})
    pushData({...order, buyer: formData})
}

const pushData = async (newOrder) => {
    const collectionOrder = collection(db, 'Ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setSuccess(orderDoc.id)
    console.log('orden generada: ', orderDoc)
}

    return(
        <>
        <div>Carrito de checkout</div>
        <h3>Resumen de pedido</h3>
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
                    {success ? (
                        <>
                            
                            <h2>Su orden se genero con éxito</h2>
                            <p>ID de compra: {success}</p>
                        </>
                    ): (
                        <form onSubmit={submitData}>
                        
                        <input type='text'name='name' placeholder ='nombre' order={formData.name} onChange={handleChange} />
                        <input type='number'name='phone' placeholder = 'numero' order={formData.phone} onChange={handleChange} />
                        <input type='email'name='email' placeholder = 'email' order={formData.email} onChange={handleChange} />
                        <button type='submit'>Enviar</button>
                        
                    </form>
                    )}
                   
                </Modal>
                }
                 <div className="Subtotal">
                    <button onClick={() => setShowModal(true)}> Pagar</button>
                   
                        <div className="itemPedido">
                            <p>Costo de Delivery $200</p>
                        </div>
                        
                </div>
                
            
        </div>
        </>
    )
}

export default Cart