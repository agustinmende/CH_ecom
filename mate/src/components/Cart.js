import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../components/ItemCount';
import Footer from '../components/Footer';

function Cart(props) {
    const context = useContext(CartContext);

    const onAdd = (e, item, quantity) => {
        context.addItem(e, item, quantity)
    };

    const onSubstract = (e, item, quantity) => {
        context.substractItem(e, item, quantity)
    };

    return (
        <>
            <div >
                <div className="breadcrumbs">
                    <Link to="/">
                    <span>Volver</span>
                    </Link>
                </div>
                <div className="appear" hidden={context.cart.length !== 0}>
                    <h3>El carro esta vacio</h3>
                </div>
                <button onClick={() => { context.clear() }} hidden={context.cart.length === 0}>Vaciar el carrito</button>
                <div className="cart-container" hidden={context.cart.length === 0}>
                        {
                            context.cart.map(
                                (obj, pos) => {
                                    return (
                                        <div key={obj.item.id} className="cart-item">
                                            <img src={"/products/"+obj.item.pictureUrl} alt={obj.item.title} />
                                                    <h3>{obj.item.title}</h3>
                                                    <ItemCount min="0" max={obj.item.stock} value={obj.quantity} onAdd={(e) => { onAdd(e, obj.item, 1) }} onSubstract={(e) => { onSubstract(e, obj.item, 1) }} />
                                                    <p>Precio Unitario: ${obj.item.price} </p>
                                                    <p>Subtotal: ${obj.item.price * obj.quantity} </p>
                                                    <a href="#nogo" onClick={() => { context.removeItem(pos) }}>Borrar producto</a>
                                        </div>
                                    );
                                }
                            )
                        }
                        <div className="cart-total">
                            <p>Total: ${context.totalPrice}</p>
                            <p><Link to="/checkout">Continuar compra</Link></p>
                        </div>
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;