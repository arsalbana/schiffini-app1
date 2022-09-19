import ItemListContainer from "../Componentes/ItemListContainer/ItemListContainer"
import '../Componentes/ItemProduct/ItemProduct.scss';
import ItemListContainerHome from "../Componentes/ItemListContainerHome/ItemListContainerHome";
const Productos = () => {
    return (
        <>
            
            <div className='container'>
                <div className='ItemListContainer'>
                <ItemListContainer />
                </div>
               
                <div className='ItemListContainer'>
                <ItemListContainerHome />
                </div>
            </div>
        </>
    )
}
export default Productos