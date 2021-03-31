import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
    const initial = 0;
    const [itemsQ, setItemsQ] = useState(initial);
    const availableStock = item.stock - itemsQ;

    const Stock = () => {
        return (
            <>
                <p className="stock">Cantidad disponible: {availableStock}</p>
                <ItemCount min="0" max={item.stock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <button className="itemSumbit" disabled={!itemsQ} onClick={event =>  window.location.href='/cart'}>Comprar</button>
            </>
        )
    }

    const NoStock = () => {
        return <h3>No hay stock disponible</h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if (itemsQ > item.stock) {
            setItemsQ(item.stock);
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

    const IsAvailable = item.stock > 0
        ? Stock
        : NoStock;

    return (
        <div className="producto">
                <img src={item.pictureUrl} alt={item.title} />
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