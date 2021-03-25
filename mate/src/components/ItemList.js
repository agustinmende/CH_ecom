import Item from "../components/Item";

function ItemList (props) {

  return (
    <div id="productList">
       {
        Object.keys(props.items).map(
          (id) => {
            return <Item key={id} id={id} item={props.items[id]} />;
          }
        )
      }
    </div>
  )
};

export default ItemList;