import Item from "../components/Item";

function ItemList (props) {
console.log(props.items)
  return (
    <div id="productList">
       {
        props.items.map(
          (item) => {
            return <Item key={item.id} id={item.id} item={item} />;
          }
        )
      }
    </div>
  )
};

export default ItemList;