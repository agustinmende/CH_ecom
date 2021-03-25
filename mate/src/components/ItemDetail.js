
function ItemDetail({ item }) {
    return (
        <div className="producto">
            <img src={item.pictureUrl} alt={item.title} />
            <div className="opciones-compra">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.fullDescription}</p>
                    <span>Precio: ${item.price}</span>
            </div>
        </div>
    );
}

export default ItemDetail;