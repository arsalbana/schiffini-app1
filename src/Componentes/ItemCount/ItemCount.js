import React from 'react';
import { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ stock, initial, setCantidadSeleccionada }) => {

  
  const onAdd = () => {
    console.log("Agregar al carrito: ", setCantidadSeleccionada)
    
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
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;