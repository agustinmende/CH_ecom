import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const CartWidget = () => {

    const context = useContext(CartContext);
    const stockInCart = context.getTotalQty();
    

    return (
        <div id="cart-widget">
            <span className={stockInCart > 0 ? 'full':'empty'}>{stockInCart}</span>
            <a href="/cart"><img src="/images/navbar-cart.png" alt="Shopping cart" /></a>
        </div>
        )
}

export default CartWidget;