import React, { useState } from 'react';
import ItemCount from "../components/ItemCount";

const ItemListContainer = (props) => {

const [stockActual, setStockActual] = useState(10);
    const restarStock = (e, nuevoStock) => {
        e.preventDefault();
        if(nuevoStock == 0) {
            alert("Debe ingresar al menos 1 producto");
        }
        setStockActual((stockActual) => stockActual - nuevoStock);
    };
    return (
            <div className="App">
                <h3>
                    {props.greeting}
                </h3>
                <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
            </div>
    )
};

export default ItemListContainer;