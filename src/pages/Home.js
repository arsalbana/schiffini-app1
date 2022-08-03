import ItemListContainer from "../Componentes/ItemListContainer/ItemListContainer"
import '../Componentes/ItemProduct/ItemProduct.scss'
const Home = () => {
    return (
        <>
            <h2>Productos</h2>
            <div className='container'>
                <div className='ItemListContainer'>
                <ItemListContainer />
                </div>
            </div>
        </>
    )
}
export default Home