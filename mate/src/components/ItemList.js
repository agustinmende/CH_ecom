import Item from "../components/Item";

function ItemList (props) {

  return (
    <ul>
      {
        props.items.map(
          item => <Item key={item.id} item={item} />
        )
      }
    </ul>
  )
};

export default ItemList;