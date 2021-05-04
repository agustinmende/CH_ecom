import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { getFirestore } from '../configs/Firebase';

function Orders() {
    const [orders, setOrders] = useState([])
    const db = getFirestore();
    const context = useContext(CartContext);
    let userEmail = "";

    const getAll = () => {
        console.log(context.getUserDetails().email);

        context.getUserDetails().email !== undefined ? userEmail = context.getUserDetails().email : userEmail = "";
        const itemsCollection = db.collection('orders').where("buyer.email", "==", userEmail);
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
        <>
            <div className="breadcrumb">
                <Link to="/" className="back-link">
                    Volver
                </Link>
                <h2>Mis Ordenes</h2>
            </div>
            <div className="checkout" >
            {
                (orders.length === 0)
                    ? <h2> Cargando...</h2>
                    : <>
                        {
                            orders.map(
                                (order) => {
                                    return (
                                        <div key={order.id} className="order" id={order.id}>
                                            <div>
                                                <h3>Detalles de la compra</h3>
                                                <p ><strong>Número de Orden:</strong> {order.id} </p>
                                                <p><strong>Fecha de compra:</strong> { order.date.toDate().toLocaleDateString()}</p>
                                                <p><strong>Nombre:</strong>  {order.buyer.name}</p>
                                                <p><strong>Teléfono:</strong> {order.buyer.phone}</p>
                                                <p><strong>Email:</strong> {order.buyer.email}</p>
                                            </div>
                                            {
                                                order.items.map(
                                                    (item) => {
                                                        return (
                                                            <div className="cart-item"  key={item.id}>
                                                                <p><strong>Producto:</strong> {item.title} </p>
                                                                <p><strong>Cantidad:</strong> {item.quantity}</p>
                                                                <p><strong>Precio unitario:</strong> ${item.price} </p>
                                                                <p><strong>Total:</strong> ${item.price * item.quantity}</p>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            }
                                            <p className="orderTotal">Total de la orden: ${order.total}</p>

                                     </div>
                                    );
                                }
                            )
                        }
                   </>
            }
            </div>
        </>
    );
}

export default Orders;