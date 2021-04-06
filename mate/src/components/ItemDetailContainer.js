import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import ItemDetail from "../components/ItemDetail";


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

  return (
     <>
           {
  item === ''
    ? <p>Cargando</p>
    : <div className={`item-detail-container ${item ? 'appear' : 'Loading...'}`}>
        <div className="breadcrumbs">
          <Link to="/">
            <span>Volver</span>
          </Link>
        </div>
        <div className="item-container" >
          <ItemDetail item={item} id={id}/>
        </div>
    </div>
}
    </>
  )
};

export default ItemDetailContainer;
