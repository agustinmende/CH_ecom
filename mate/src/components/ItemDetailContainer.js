import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";
import ItemCount from "../components/ItemCount";


function ItemDetailContainer() {
  const [item, setItem] = useState('');
  let { id } = useParams();

  const getItem = (id) => {
    fetch(`https://coderhouse-a2dba-default-rtdb.firebaseio.com/items/${id}.json`)
      .then(response => response.json())
      .then((result) => setItem(result))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  const [stockActual, setStockActual] = useState(10);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    if(nuevoStock == 0) {
        alert("Debe ingresar al menos 1 producto");
    }
    setStockActual((stockActual) => stockActual - nuevoStock);
};

  return (
    <>
           <div className="breadcrumbs">
              <Link to="/">
                <span>Volver</span>
              </Link>
            </div>
            <div className="item-container" >
              <ItemDetail item={item} />
              <ItemCount stock={item.stock} initial={1} onAdd={restarStock} />
            </div>
    </>
  )
};

export default ItemDetailContainer;