import { Link } from "react-router-dom";

function Item({id, item }) {

    return (
        <div className="product">
            <img src={"/products/"+ item.pictureUrl} alt={item.title} />
            <h3 className="title">{item.title}</h3>
            <p className="price">$ {item.price}</p>

            <div className="ring-overlay">
                <a className="buynow" href="">Buy Now</a>
                <a className="save" href="">Save</a>
                <a className="addtocart" href="">Add to cart</a>
                <p className="description">{item.description}</p>
                <p><Link to={`/item/${id}`}>Ver Más...</Link></p>
            </div>
        </div>
    );
};

export default Item;