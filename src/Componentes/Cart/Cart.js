import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"

const Cart = () => {
    const { cartProducts } = useContext(CartContext)


    return(
        <>
        <div>Carrito de checkout</div>
        {console.log("cartProducts dede checkout: ",cartProducts)}
        </>
    )
}

export default Cart