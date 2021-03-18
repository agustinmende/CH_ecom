import Item from "../components/Item";

function ItemList (props) {

  return (
    <div id="productList">
      {
        props.items.map(
          item => <Item item={item} />
        )
      }
    </div>
  )
};

export default ItemList;