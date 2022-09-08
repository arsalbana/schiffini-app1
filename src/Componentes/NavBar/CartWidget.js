import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../Contexts/CartContext';
import './CartWidget.scss';



const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const { cartProducts, clearAll, clearProduct, totalProducts, totalPrice, setTotalCart} = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget' >
            {cartProducts.length !== 0 && <p>{totalProducts} </p>}
            <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
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
                            
                            <div className='CartProductDetail'>
                                <p>Cantidad: {product.contador} </p>
                                
                            </div>
                            <div className='CartProductDetail'>
                                <p>{product.precio * product.contador}</p>
                                
                            </div>
                            <div className='CartProductAction' >
                                <DeleteIcon onClick={() => 
                                
                                clearProduct(product.id )
                                }/>
                            </div>
                        </div>
                    )
                })}
                
                <div className='CartProductDetail'>
                                <p> Total Productos:  {totalProducts}</p>
                            </div>
                            <div className='CartProductDetail'>
                                <p> Precio Total:  {totalPrice}</p>
                            </div>
                <button onClick={() => clearAll()} className={"btn-delete-all"}>Borrar todo</button>
            </Menu>
        </div>
    )
}

export default CartWidget