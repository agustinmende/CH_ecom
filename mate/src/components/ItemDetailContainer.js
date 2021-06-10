import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Footer from '../components/Footer';
import { getFirestore } from '../configs/Firebase';


function ItemDetailContainer() {
  const [item, setItem] = useState('');
  let { id } = useParams();

  const getItem = (id) => {
    const db = getFirestore();
    db.collection('items').doc(id).get().then((snapshot) => {
      setItem(snapshot.data());
    });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
     <>
      {
        item === ''
          ? <p>Cargando...</p>
          : <div className="item_detail_container">
              <div className="breadcrumbs">
                <Link to="/">
                  <span><img src="/images/back_arrow.png" alt="" /> Back to shop</span>
                </Link>
              </div>
              <div className="item-container" >
                <ItemDetail item={item} id={id}/>
              </div>
          </div>
      }
      <Footer />
    </>
  )
};

export default ItemDetailContainer;
