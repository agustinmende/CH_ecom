import { useState } from 'react';
import itemImage from "../images/placeholder.png";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [items, setItems] = useState(initial);
    let availableStock = stock - items;

    const handleChange = (e) => {
        e.preventDefault();
        setItems(Number(e.target.value));

        if (Number(e.target.value) > stock) {
            setItems(stock);
        }
        if (Number(e.target.value) < 0) {
            setItems(0);
        }
    };

    const itemChange = (e) => {
        e.preventDefault();

       if (e.target.id === "decrease") {
        setItems(items - 1);
        };
        if (e.target.id === "increase") {
            setItems(items + 1);
        }
    };

    return (
        <form id="itemCount">
            <div className="item">
                <img src={itemImage} alt="placeholderIMG"/>
                <button id="decrease" onClick={(e) => itemChange(e)} disabled={items <= 0}>-</button>
                <input type="number" value={items} placeholder={initial} onChange={(e) => handleChange(e)}></input>
                <button id="increase" onClick={(e) => itemChange(e)} disabled={items >= stock}>+</button>
                <p>Cantidad disponible: {availableStock}</p>
            </div>
            <button className="addToCart" onClick={(e) =>{ onAdd(e, items); setItems(0)}}>Agregar</button>

        </form>
    );
};

export default ItemCount;