import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import { getFirestore } from '../configs/Firebase';

function Checkout(props) {
    const context = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = () => {
        const db = getFirestore();

        let items = context.cart.map(
            (obj) => {
                return {
                    id: obj.item.id,
                    title: obj.item.title,
                    quantity: obj.quantity,
                    price: obj.item.price,
                };
            }
        )

        const newOrder = {
            buyer,
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: context.totalPrice,
        };

        const orders = db.collection("orders");
        orders.add(newOrder).then((resp) => {
            console.log('Order created')

            let batch = db.batch();

            let itemsRef = db.collection("items");
            context.cart.forEach(
                (obj) => {
                    batch.update(itemsRef.doc(obj.item.id), { stock: obj.item.stock });
                }
            )

            batch.commit().then(() => {
                context.clear();
                setBuyer({ name: '', phone: '', email: '' });
            });

        }).catch((err) => {
            console.error('Error: ', err)
        });
    }


    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart">
                   Volver
                </Link>
            </div>
            <div hidden={context.cart.length === 0}>
                <p>
                    <label>Nombre</label>
                    <input type="text" name="name" onChange={handleInputChange} id="name" placeholder=" " />
                </p>
                <p>
                <label>Telefono</label>
                <input type="text" name="phone" onChange={handleInputChange} id="tel" placeholder=" " />
                </p>
                <p>
                <label>Email</label>
                <input type="email" name="email" onChange={handleInputChange} id="email" placeholder=" " />
                </p>

                <ul>
                    {
                        context.cart.map(
                            (obj) => {
                                return (
                                    <li key={obj.item.id}>
                                        <span> Producto: {obj.item.title} </span>
                                        <span> Cantidad {obj.quantity}</span>
                                        <span> Precio $ {obj.item.price} </span>
                                        <span> Total $ {obj.item.price * obj.quantity}</span>
                                    </li>
                                );
                            }
                        )
                    }
                    <li><span>Total: </span> <span> $ {context.totalPrice}</span> </li>
                </ul>
                <Link to="/orders" className={`btn--big ${((context.cart.length > 0) && (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '')) ? '' : 'disabled'}`} onClick={createOrder}> Finalizar compra </Link>
            </div>
        </div>

    );
}

export default Checkout;