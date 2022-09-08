import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => { 
    const [cartProducts, setCartProducts] = useState([])
    const [totalCart, setTotalCart] = useState(0)
    let [totalProducts, setTotalProducts] = useState(0)
    const [ totalPrice, setTotalPrice ] = useState(0)

    const addProductToCart = (product, ItemCount) => {
        let isInCart = cartProducts.find(
            (cartItem) => cartItem.id === product.id
        );

        if(isInCart) {
            if(isInCart.contador + ItemCount > isInCart.stock)
            
            return false; 
            isInCart.contador += ItemCount
            setTotalProducts(isInCart.contador + totalProducts)    
        } else {
            product.contador = ItemCount;
            setTotalProducts(ItemCount + totalProducts)
            setCartProducts ([...cartProducts, product]);
        }  
       
        
        setTotalCart(
            totalCart + product.precio * product.contador
            
        )
        
        setTotalPrice(totalCart + product.precio * product.contador)
    }

    const clearAll = () => {
        setCartProducts([])
        setTotalProducts(0)
        setTotalCart(0)
        setTotalPrice(0)
    }

    const clearProduct = ( id ) => {
        const prod = cartProducts.find((product) => product.id === id)
        setTotalCart( totalCart -
            prod.precio * prod.contador
        )

        setTotalProducts(totalProducts - prod.contador)

        const newCart = cartProducts.filter((product) => product.id !== id)
        setCartProducts(newCart);
    }

    const data = {
        cartProducts,
        setCartProducts,
        clearAll,
        totalCart,
        totalProducts,
        clearProduct,
        addProductToCart,
        totalPrice
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider