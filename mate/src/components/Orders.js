import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../configs/Firebase';



function Orders() {
    const [orders, setOrders] = useState([])
    const db = getFirestore();
    const context = useContext(CartContext);

    const getAll = () => {
        const itemsCollection = db.collection('orders').where("buyer.email", "==", context.getUserDetails().email);
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No orders');
            }
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            setOrders(snapshot);
        }).catch((error) => {
            console.error("Error:", error);
        }).finally(() => {
            console.log("Orders loaded");
        });
    };

    useEffect(() => {
        getAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart" className="back-link">
                    Volver
                </Link>
            </div>
            <div className="checkout">
            {
                (orders.length === 0)
                    ? <h2> Cargando...</h2>
                    : <div>
                        {
                            orders.map(
                                (order) => {
                                    return (
                                        <>
                                            <div key={order.id}>

                                                <h3>Detalles de la compra</h3>
                                                <p><strong>Orden #:</strong> {order.id} </p>

                                                <p><strong>Nombre:</strong>  {order.buyer.name}</p>

                                                <p><strong>Telefono:</strong> {order.buyer.phone}</p>

                                                <p><strong>Email:</strong> {order.buyer.email}</p>

                                                <p><strong>Fecha de compra:</strong> { order.date.toDate().toString()}</p>

                                            </div>
                                            {
                                                order.items.map(
                                                    (item) => {
                                                        return (
                                                            <div className="cart-item">
                                                                <p><strong>Producto:</strong> {item.title} </p>
                                                                <p><strong>Cantidad:</strong> {item.quantity}</p>
                                                                <p><strong>Precio unitario:</strong> ${item.price} </p>
                                                                <p><strong>Total:</strong> ${item.price * item.quantity}</p>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            }
                                            <div className="cart-total">
                                                <p>Total: ${order.total}</p>
                                            </div>

                                     </>
                                    );
                                }
                            )
                        }
                    </div>
            }
            </div>
        </div>
    );
}

export default Orders;