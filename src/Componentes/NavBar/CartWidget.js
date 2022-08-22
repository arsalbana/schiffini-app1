import {useState , useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../Contexts/CartContext';
import './CartWidget.scss';



const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    
    const { cartProducts, clear, deleteProduct, totalProducts} = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className='cart-widget' >
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
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
                <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>
            </Menu>
        </div>
    )
}

export default CartWidget