import { CartContext } from '../context/CartContext';
import { useContext, useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from "firebase/app";
import { getFirestore } from '../configs/Firebase';

function Checkout(props) {
    
    const context = useContext(CartContext);
    
    const [buyer, setBuyer] = useState(
        { 
            name: '', 
            phone: '', 
            email: '', 
            emailVerification: '' 
        }
        );
    const history = useHistory();
    const [nameError, setNameError] = useState(false);
    const [phoneError, setphoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailVerificationError, setEmailVerificationError] = useState(false);

    const firstRender = useRef(true);


    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value


        })
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        if( nameError === false && phoneError === false && emailError === false && emailVerificationError === false) {
            createOrder()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nameError,phoneError,emailError,emailVerificationError ])


const validateFields = () => {

    console.log(buyer)

    window.location.href = "/checkoutSuccess";
    return false;

    if(buyer.name === "") {
        setNameError(true);
    } else {
        setNameError(false);
    }
    
    if(buyer.phone === "") {
        setphoneError(true);
    } else {
        setphoneError(false);
    }


    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(buyer.email) !== true)
        {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    if (buyer.email !== buyer.emailVerification) {
        setEmailVerificationError(true);
        } else {
            setEmailVerificationError(false);
        }
    }

    const createOrder = () => {
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

            <div className="breadcrumbs">
                <Link to="/">
                  <span><img src="/images/back_arrow.png" alt="" /> Back to shop</span>
                </Link>
            </div>

            <div className="cart-container" >
                <div className="contact_info">
                    <div className="contact_info_w">

                        <h2>Datos de contacto</h2>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Nombre"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Apellido"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={phoneError?"inputError":""} type="text" name="phone" onChange={handleInputChange} id="tel" placeholder="Teléfono" />
                            </div>
                            <div className="fm">
                                <input className={emailError?"inputError":""} type="email" name="email" onChange={handleInputChange} id="email" placeholder="Mail" />
                            </div>
                        </div>


                        <h2>Datos de entrega</h2>

                        <div className="field_group">
                            <div className="ff">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Dirección"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Número"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Departamento (Opcional)"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="ff">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Ciudad"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Código Postal"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Provincia"   />
                            </div>
                        </div>


                        <h2>Datos de facturación</h2>

                        <div className="field_group">
                            <div className="ff">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="DNI o Cuil"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="ff">
                                <label><input id="mismos_datos" type="checkbox"  /> Mis datos de contacto y facturación son los mismos.</label>
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Nombre"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Apellido"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={phoneError?"inputError":""} type="text" name="phone" onChange={handleInputChange} id="tel" placeholder="Teléfono" />
                            </div>
                            <div className="fm">
                                <input className={emailError?"inputError":""} type="email" name="email" onChange={handleInputChange} id="email" placeholder="Mail" />
                            </div>
                        </div>


                        <h2>Dirección de facturación</h2>

                        <div className="field_group">
                            <div className="ff">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Dirección"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Número"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Departamento (Opcional)"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="ff">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Ciudad"   />
                            </div>
                        </div>

                        <div className="field_group">
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Código Postal"   />
                            </div>
                            <div className="fm">
                                <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder="Provincia"   />
                            </div>
                        </div>

                        <div className="confirm"><button className="button" onClick={validateFields}> Confirmar </button></div>

                        {/*
                        <p>
                            <label>Repetir Email</label>
                            <input className={emailVerificationError?"inputError":""} type="email" name="emailVerification" onChange={handleInputChange} id="emailVerification" placeholder="" />
                        </p>
                        */}
                    </div>
                </div>
                <div className="cart_total">
                    <div className="cart_total_w">
                        <h2>Cart Totals</h2>
                        <p className="r">
                            <span className="l">Subtotal:</span>
                            <span> ${context.totalPrice}</span>
                        </p>
                        <p className="r">
                            <span className="l">Shipping</span>
                            <span className="shipping_options">
                                <span><label><input type="radio" /> Standart (Free)</label></span>
                                <span><label><input type="radio" /> Exspress ($49.00)</label></span>
                            </span>
                        </p>
                        <p className="r total">
                            <span className="l">Total:</span>
                            <span> ${context.totalPrice}</span>
                        </p>
                        
                    </div>
                </div>
            </div>

            {/*

            
            <div className="checkout">
                <h2>Ingresá tus datos</h2>
                <p>
                    <label>Nombre</label>
                    <input className={nameError?"inputError":""} type="text" name="name" onChange={handleInputChange} id="name" placeholder=""   />
                </p>
                <p>
                    <label>Telefono</label>
                    <input className={phoneError?"inputError":""} type="text" name="phone" onChange={handleInputChange} id="tel" placeholder="" />
                </p>
                <p>
                    <label>Email</label>
                    <input className={emailError?"inputError":""} type="email" name="email" onChange={handleInputChange} id="email" placeholder="" />
                </p>
                <p>
                    <label>Repetir Email</label>
                    <input className={emailVerificationError?"inputError":""} type="email" name="emailVerification" onChange={handleInputChange} id="emailVerification" placeholder="" />
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
                        <button className="button" onClick={validateFields}> Finalizar compra </button>
                </div>
            </div>

            */}


        </div>

    );
}

export default Checkout;