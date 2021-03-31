import { Link } from "react-router-dom";

function Item({id, item }) {

    return (
        <div className="product">
            <img src={item.pictureUrl} alt={item.title} />
            <h3 className="title">{item.title}</h3>
            <p className="description">{item.description}</p>
            <p className="price">$ {item.price}</p>
            <p><Link to={`/item/${id}`}>Ver Más...</Link></p>
        </div>
    );
};

export default Item;