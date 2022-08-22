import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    console.log("mostrar cartproduct", cartProducts)
    const [totalProducts, setTotalProducts] = useState(0)
    console.log("total productos", totalProducts)
    
    const addProductToCart = (product, contador) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product.id)
            setTotalProducts(totalProducts + 1)
            return setCartProducts(cartProducts => [...cartProducts, product])
        }
        if(isInCart) {
            console.log("otro mproducto mas", product)
            setTotalProducts(totalProducts + contador)
            
        }
    }
    const [contador, setCantidadSeleccionada] = useState()
    const deleteProduct = (product) => {
        console.log("Producto a eliminar:", product)
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== product.id) )
    }
    
    const clear = () => {
        setCartProducts([])
    }
    const cantidad = () => {
        setCantidadSeleccionada (contador)
    }

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        clear,
        addProductToCart,
        totalProducts,
        cantidad
        
       
    }

    return(
        <CartContext.Provider value={data}>
            {children}
            
            
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }