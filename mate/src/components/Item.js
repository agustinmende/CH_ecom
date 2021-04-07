import { Link } from "react-router-dom";

function Item({id, item }) {

    return (
        <div className="product">
            <img src={"/products/"+ item.pictureUrl} alt={item.title} />
            <h3 className="title">{item.title}</h3>
            <p className="price">$ {item.price}</p>

            <div className="ring-overlay">
               {/* <a className="buynow" href="">Buy Now</a>
                <a className="save" href="">Save</a>
                <a className="addtocart" href="">Add to cart</a> */}
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <p className="link"><Link to={`/item/${id}`}><img src="/images/item-list-plus.png" alt="Ver mas"/></Link></p>
            </div>
        </div>
    );
};

export default Item;