import { CartContext } from '../../Contexts/CartContext';
import { useContext, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss';
import {Link} from 'react-router-dom';
import Modal from '../Modal/Modal';
import db from './../../utils/firebaseConfigs.js';
import {collection, addDoc} from 'firebase/firestore';
import image from './mapa zona entrega.png';

const Cart = () => {
    
    const [showModal, setShowModal] = useState(false)
    const [success, setSuccess] = useState()
    const { cartProducts, clearProduct, totalProducts, totalPrice} = useContext(CartContext)
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
    console.log('orden generada: ', order)
}

    return(
        <>
        
        <h3 className='resumenPedido'>Resumen de pedido</h3>
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
                                <p>Cantidad: {product.contador}</p>
                                
                            </div>
                            <div className='CartProductDetail'>
                                <p>$ {product.precio}</p>
                            </div>
                            
                            
                            <div className='CartProductAction' >
                                <DeleteIcon onClick={() => clearProduct(product.id)}/>
                            </div>
                        </div>
                    )
                })}
                <div className='CartProductDetail'>
                                <p> Total Productos:  {totalProducts}</p>
                </div>
                <div className='CartProductDetail'>
                                <p> Precio total: $ {totalPrice}</p>
                </div>

                {totalProducts > 0 ? <p>
                    Falta poco para finalizar la compra
                </p> : <Link to="/">  <p> No hay productos en el carrito </p> </Link>}
                
                {showModal &&
                <Modal title = "Datos de contacto" close={ () => setShowModal()}>
                    {success ? (
                        <>
                            
                            <h2>Su orden se genero con éxito</h2>
                            <p>ID de compra: {success}</p>
                            
                            
                            
                        </>
                    ): (
                        <div className='divFormZona'>
                        <form className='form' onSubmit={submitData}>
                        
                        <input className='inputForm' type='text'name='name' placeholder ='Nombre completo' order={formData.name} onChange={handleChange} />
                        <input className='inputForm' type='number'name='phone' placeholder = 'Número de teléfono' order={formData.phone} onChange={handleChange} />
                        <input className='inputForm' type='email'name='email' placeholder = 'Email' order={formData.email} onChange={handleChange} />
                        <input className='inputForm' type='address'name='address' placeholder = 'Dirección de envío' order={formData.address} onChange={handleChange} />
                        
                        <button className='botonEnviar' type='submit'>Enviar</button>

                        
                    </form>
                    <div className='zonaDelivery'>
                        <p>Zona de Delivery</p>
                        <img className='imagenes' src={image} alt="imagen" />
                    </div>
                    </div>
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