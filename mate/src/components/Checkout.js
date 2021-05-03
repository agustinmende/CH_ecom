import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from "firebase/app";
import { getFirestore } from '../configs/Firebase';

function Checkout(props) {
    const context = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
    const history = useHistory();
   // const activeUser = context.getUserDetails();

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const createOrder = () => {

        console.log(buyer);

        if(buyer.name == "") {
            alert("El campo nombre es obligatorio");
            return null;
        }
        if(buyer.phone == "") {
            alert("El campo Telefono es obligatorio");
            return null;
        }

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(buyer.email) != true)
            {
                alert("El email ingresado es invalido");
                return null;
            }

        const db = getFirestore();
        context.setUserDetails(buyer);

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
                history.push("/orders");
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

                        <div className="checkout">
                            <h2>Ingresá tus datos</h2>
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="name" onChange={handleInputChange} id="name" placeholder=""   />
                            </p>
                            <p>
                                <label>Telefono</label>
                                <input type="text" name="phone" onChange={handleInputChange} id="tel" placeholder="" />
                            </p>
                            <p>
                                <label>Email</label>
                                <input type="email" name="email" onChange={handleInputChange} id="email" placeholder="" />
                            </p>
                        </div>

                        <div className="cart-container" hidden={context.cart.length === 0}>

                    {
                        context.cart.map(
                            (obj) => {
                                return (
                                    <div className="cart-item" key={obj.item.id}>
                                        <img src={"/products/"+obj.item.pictureUrl} alt={obj.item.title} />
                                        <p> <strong>Producto:</strong> {obj.item.title} </p>
                                        <p> <strong>Cantidad:</strong> {obj.quantity}</p>
                                        <p> <strong>Precio:</strong> ${obj.item.price} </p>
                                        <p> <strong>Subtotal:</strong> ${obj.item.price * obj.quantity}</p>
                                    </div>
                                );
                            }
                        )
                    }
                    <div className="cart-total">
                            <p>Total: ${context.totalPrice}</p>
                            <button className="" onClick={createOrder}> Finalizar compra </button>
                    </div>
            </div>
        </div>

    );
}

export default Checkout;