
const [contador, setContador] = useState(1)
    const addNumber = () => {
        
        if (contador < 4){
        setContador(contador + 1)
        }
        else {
            alert("no hay más stock")
        }
    }
    const lessNumber = () => {
        if (contador > 0){
        setContador(contador - 1)
        }
        
    }
const ItemCount = () => {
    return (
    <div className='countProd'>
                    <button onClick={lessNumber}>-</button>
                    <p>{contador}</p>
                    <button onClick={addNumber}>+</button>
    </div>
)}
export default ItemCount