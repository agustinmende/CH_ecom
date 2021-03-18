
function Item({ item }) {

    return (
        <li id={item.id}>

                <img src={item.pictureUrl} alt={item.title} />
                    <h3 className="title">{item.title}</h3>
                    <p className="description">
                        {item.description}
                    </p>

            <p>$ {item.price}</p>
        </li>
    );
};

export default Item;