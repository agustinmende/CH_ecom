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
                    <span>← Volver</span>
                    </Link>
                </div>

                {/*
                <div className="appear" hidden={context.cart.length !== 0}>
                    <h3>El carro esta vacio</h3>
                </div>
                <button onClick={() => { context.clear() }} hidden={context.cart.length === 0}>Vaciar el carrito</button>
                */}

                <div className="cart-container" hidden={context.cart.length === 0}>
                    <div className="cart">
                        <div className="cart_header">
                            <span className="hTitle">Product</span>
                            <span className="hPrice">Price</span>
                            <span className="hQuantity">Quantity</span>
                            <span className="hTotal">Total</span>
                        </div>
                        <div className="cart_list">
                        {
                            context.cart.map(
                                (obj, pos) => {
                                    return (
                                        <div key={obj.item.id} className="cart-item">
                                            <a className="close" href="#nogo" onClick={() => { context.removeItem(pos) }}>X</a>
                                            <p className="img"><img src={"/products/"+obj.item.pictureUrl} alt={obj.item.title} /></p>
                                            <h3>{obj.item.title}</h3>
                                            <p>${obj.item.price} </p>
                                            <ItemCount min="0" max={obj.item.stock} value={obj.quantity} onAdd={(e) => { onAdd(e, obj.item, 1) }} onSubstract={(e) => { onSubstract(e, obj.item, 1) }} />
                                            <p>${obj.item.price * obj.quantity} </p>
                                        </div>
                                    );
                                }
                            )
                        }
                        </div>
                    </div>
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <p>Total: ${context.totalPrice}</p>
                        <p><Link to="/checkout">Proceed to checkout</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;