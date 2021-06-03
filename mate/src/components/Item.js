import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

/*
return (
    <div className="product">
        <img src={"/products/"+ item.pictureUrl} alt={item.title} />
        <h3 className="title">{item.title}</h3>
        <p className="price">$ {item.price}</p>

        <div className="ring-overlay">
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
            <p className="link"><Link to={`/item/${id}`}><img src="/images/item-list-plus.png" alt="Ver mas"/></Link></p>
        </div>
    </div>
);
*/

function Item({id, item }) {


    const initial = 1;
    const [itemsQ, setItemsQ] = useState(initial);
    const context = useContext(CartContext);
    const stockInCart = context.getItemQty(item.id);
    const [maxStock, setMaxStock] = useState(item.stock - stockInCart);

    const Stock = () => {
        return (
            <>
                <button className="button" onClick={(e) => { onAddToCart(e) }} >Agregar al carrito</button>
            </>
        )
    }
    const NoStock = () => {
        return <p className="nostock">Sin stock</p>
    }

    const IsAvailable = maxStock > 0
        ? Stock
        : NoStock;

    const onAddToCart = (e) => {
        context.addItem(e, item, itemsQ);
        setMaxStock(maxStock - itemsQ);
        setItemsQ(0);
    };




    return (
        <div className="product">
            <Link to={`/item/${id}`}><img src={"/products/"+ item.pictureUrl} alt={item.title} /></Link>
            <h3 className="title">{item.title}</h3>
            <p className="price">$ {item.price}</p>
            <div className="addToCart"><IsAvailable /></div>
        </div>
    );
};

export default Item;