
function Item({ item }) {

    return (
        <div className="product">
            <img src={item.pictureUrl} alt={item.title} />
            <h3 className="title">{item.title}</h3>
            <p className="id">Product ID: {item.id}</p>
            <p className="description">{item.description}</p>
            <p className="price">$ {item.price}</p>
        </div>
    );
};

export default Item;