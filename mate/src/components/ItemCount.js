const ItemCount = ({ min=0, max, value=0, onAdd, onSubstract }) => {

    return (
        <form id="itemCount">
            <div className="item">
                <button onClick={(e) => onSubstract(e)} disabled={value <= min}>-</button>
                <input  type="number" defaultValue={value} placeholder={value} ></input>
                <button onClick={(e) => onAdd(e)} disabled={value >= max}>+</button>
            </div>
        </form>
    );
};

export default ItemCount;