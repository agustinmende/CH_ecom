import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore } from '../configs/Firebase';

function Orders() {
    const [orders, setOrders] = useState([])
    const db = getFirestore();

    const getAll = () => {
        const itemsCollection = db.collection('orders');
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

    function formatDate(dateFirestore) {
        let timestamp= dateFirestore.seconds * 1000 + dateFirestore.nanoseconds /1000000;
        let dateObj = new Date(timestamp);
        let date = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();
        let fullDate = `${date}/${month}/${year}`;
        return fullDate;
    }

    function deleteOrder(id) {
        const order = db.collection("orders").doc(id);
        order.delete();
        let updatedOrders = orders.filter((order) => { return id !== order.id })
        setOrders(updatedOrders);
    }

    useEffect(() => {
        getAll();
    }, []);

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart" className="back-link">
                    Volver
                </Link>
            </div>
            {
                (orders.length === 0)
                    ? <h2> No hay compras disponibles para mostrar...</h2>
                    : <div>
                        {
                            orders.map(
                                (order) => {
                                    return (
                                        <ul key={order.id}>
                                            <button onClick={() => { deleteOrder(order.id) }}>
                                                Borrar
                                            </button>
                                            <h4>Compra</h4>
                                            <p >({order.id}) </p>
                                            <ul>
                                                <li>
                                                    <b>Nombre: </b> {order.buyer.name}
                                                </li>
                                                <li>
                                                    <b>Telefono: </b> {order.buyer.phone}
                                                </li>
                                                <li>
                                                    <b>Email: </b> {order.buyer.email}
                                                </li>
                                                <li>
                                                    <b>Fecha de compra: </b> { formatDate(order.date)}
                                                </li>
                                            </ul>
                                            <li>
                                                <span >Producto</span>
                                                <span>Cantidad</span>
                                                <span >Precio </span>
                                                <span>Subtotal:</span>
                                            </li>
                                            {
                                                order.items.map(
                                                    (item) => {
                                                        return (
                                                            <li className="order__item" key={item.id}>
                                                                <span> {item.title} </span>
                                                                <span> {item.quantity}</span>
                                                                <span> $ {item.price} </span>
                                                                <span> $ {item.price * item.quantity}</span>
                                                            </li>
                                                        );
                                                    }
                                                )
                                            }
                                            <li><span>Total: </span> <span> $ {order.total}</span> </li>
                                        </ul>
                                    );
                                }
                            )
                        }
                        <button className={`btn--big ${orders.length > 0 ? '' : 'disabled'}`} > Finalizar </button>
                    </div>
            }
        </div>
    );
}

export default Orders;