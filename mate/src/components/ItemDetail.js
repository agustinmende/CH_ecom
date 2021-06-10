import { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

import Gallery from "../components/Gallery";

function ItemDetail(props) {
        const initial = 0;
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


    const Stock = () => {
        return (
            <>
                <p className="stock">Cantidad disponible: {availableStock}</p>
                <div className="product_actions">
                    <ItemCount min="0" max={maxStock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                    <button className="button" onClick={(e) => { onAddToCart(e) }} >Add to cart</button>
                </div>
            </>
        )
    }
    const NoStock = () => {
        return <p className="nostock">No hay stock disponible</p>
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

    
    let imgUrls = [
        "/products/"+item.pictureUrl,
        'https://source.unsplash.com/k3IogSsONd4/538x638',
        'https://source.unsplash.com/gThfDnqgfMw/538x638',
        'https://source.unsplash.com/_1x_x8Vtg2w/538x638'
     ]

    return (
        <div className="producto">
                <Gallery imgUrls={imgUrls} item={item} />
                <div className="opciones-compra">
                    <h3>{item.title}</h3>
                    <p className="price">${item.price}</p>
                    <p>{item.fullDescription}</p>
                    <IsAvailable />
                </div>
        </div>
    );
}

export default ItemDetail;