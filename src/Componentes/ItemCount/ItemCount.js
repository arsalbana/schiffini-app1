import React from 'react';
import { useState , useContext } from 'react';
import './ItemCount.scss';
import { CartContext } from '../../Contexts/CartContext';

const ItemCount = ({ stock, initial, setCantidadSeleccionada, productData }) => {
 
  const {addProductToCart} = useContext(CartContext)
  const onAdd = () => {
    console.log("Agregar al carrito: ", setCantidadSeleccionada)
    console.log("info producto", productData)
    
    addProductToCart(productData)
    setCantidadSeleccionada(contador)
}
  const [contador, setContador] = useState(initial);

  const addNumber = (num) => {
    setContador(contador + num);
  };

  return (
    <div className="countProd">
      <div className="contenedorCount">
        <button
          className="buttonCount"
          onClick={() => addNumber(-1)}
      
          disabled={contador === initial}
        >
          -
        </button>
        <span className="contadorNumero">{contador}</span>
        <button
          className="buttonCount"
          onClick={() => addNumber(+1)}
          
          disabled={contador === stock}
        >
          +
        </button>
      </div>

      <button
        className="buttonPrimary"
        onClick={() => {
          onAdd(contador);
          
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ItemCount;