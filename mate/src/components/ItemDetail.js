import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail(props) {
        const initial = 1;
        const [itemsQ, setItemsQ] = useState(initial);
        const context = useContext(CartContext);
        const item = {
            id: props.id,
            category: props.item.category,
            description: props.item.description,
            fullDescription: props.item.fullDescription,
            pictureUrl: props.item.pictureUrl,
            price: props.item.price,
            stock: props.item.stock,
            title: props.item.title
        };
        const stockInCart = context.getItemQty(item.id);
        const [maxStock, setMaxStock] = useState(item.stock - stockInCart);
        const availableStock = maxStock - itemsQ;

       // console.log("======");
      //  console.log("maxStock: " + maxStock);
      //  console.log("itemsQ: " + itemsQ);
       // console.log("AvailableStock: " + availableStock);

    const Stock = () => {
        return (
            <>
                <p className="stock">Cantidad disponible: {availableStock}</p>
                <ItemCount min="0" max={maxStock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <button onClick={(e) => { onAddToCart(e) }} className={`btn--big ${itemsQ === 0 ? 'disabled' : ''}`} >Agregar al carrito</button>
            </>
        )
    }


    const NoStock = () => {
        return <h3>No hay stock disponible</h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if (itemsQ > maxStock) {
            setItemsQ(maxStock);
        } else {
            setItemsQ(itemsQ + 1);
        }
    };

    const onSubstract = (e) => {
        e.preventDefault();
        if (itemsQ < initial) {
            setItemsQ(initial);
        } else {
            setItemsQ(itemsQ - 1);
        }
    };

    const IsAvailable = maxStock > 0
        ? Stock
        : NoStock;

    const onAddToCart = (e) => {
        context.addItem(e, item, itemsQ);
        setMaxStock(maxStock - itemsQ);
        setItemsQ(0);
    };


    return (
        <div className="producto">
                <img src={"/products/"+item.pictureUrl} alt={item.title} />
                    <div className="opciones-compra">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.fullDescription}</p>
                        <span>Precio: ${item.price}</span>
                        <IsAvailable />
                    </div>
        </div>
    );
}

export default ItemDetail;