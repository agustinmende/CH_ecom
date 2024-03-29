
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { NavLink} from 'react-router-dom';

function CartWidget () {

    const context = useContext(CartContext);
    const stockInCart = context.getTotalQty();

    return (
        <>
            <div id="cart-widget">
            <NavLink to="/cart">
                    <span className={stockInCart > 0 ? 'full':'empty'}>{stockInCart}</span>
                    <img src="/images/top_nav_cart.png" alt="Shopping cart" />
                </NavLink>
            </div>
        </>
        )
}

export default CartWidget;