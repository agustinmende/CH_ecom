import { useParams } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import ItemList from "../components/ItemList";
import ItemCategories from "../components/ItemCategories";
import Slider from '../components/Slider';
import Footer from '../components/Footer';

import { getFirestore } from '../configs/Firebase';

const ItemListContainer = (props) => {

let [categories, setCategories] = useState('');
let [items, setItems] = useState('');
let [itemsFiltered, setItemsFiltered] = useState('');
let { id: idCategory } = useParams();


const getAll = () => {
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    itemsCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No hay resultados');
        }
        let snapshot = querySnapshot.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        });
        setItems(snapshot);
    }).catch((error) => {
        console.error("Error:", error);
    }).finally(() => {
        console.log("Cargado");
    });

    const categoriesCollection = db.collection('categories');
    categoriesCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('No hay resultados');
        }
        let snapshot = querySnapshot.docs.map((doc) => doc.data());
        setCategories(snapshot);
    }).catch((error) => {
        console.error("Error:", error);
    }).finally(() => {

    });
};



const filterByCategory = (_category, _items) => {
    if (_items !== '') {
        if (_category !== undefined) {
            let filtered = _items
                .filter((obj) => {
                    return obj.category === _category;
                });
            if (filtered.length === 0) {
                setItemsFiltered('no category found');
            } else {
                setItemsFiltered(filtered);
            }

        } else {
            setItemsFiltered(_items);
        }
    }
};

useEffect(() => {
    filterByCategory(idCategory, items);
}, [idCategory, items]);

useEffect(() => {
    getAll();
}, []);


    return (
        <>
            <Slider />
            <div className="listContainer">
                {
                    categories === ''
                        ? <span >Cargando</span>
                        : <>
                            < ItemCategories categories={categories} />
                            <h3>Productos</h3>
                        </>
                }
                {
                    itemsFiltered === 'Categoria no encontrada'
                        ? <h3>Categoria: {idCategory} </h3>
                        : itemsFiltered === ''
                            ? <span>Cargando</span>
                            : <>
                                <p className="subtitle">Nuestros diseños / Plata 925</p>
                                <ItemList items={itemsFiltered} />
                            </>
                }
            </div>
            <Footer />
        </>
    )
};

export default ItemListContainer;