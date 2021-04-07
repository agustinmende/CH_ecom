import { useParams } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import ItemList from "../components/ItemList";
import ItemCategories from "../components/ItemCategories";
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const ItemListContainer = (props) => {

let [categories, setCategories] = useState('');
let [items, setItems] = useState('');
let [itemsFiltered, setItemsFiltered] = useState('');
let { id: idCategory } = useParams();



const getAll = () => {
    fetch('https://coderhouse-a2dba-default-rtdb.firebaseio.com/.json')
        .then((response) => {
           // console.log("Respuesta:" +response);
            return response.json();
        })
        .then((result) => {
           // console.log("Result:" +result);
            setItems(result.items);
            setCategories(result.categories);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

const filterByCategory = (_category, _items) => {
    if (_items !== '') {
        if (_category !== undefined) {
            let filtered = Object.keys(_items)
            .filter((key) => {
                return _items[key].category === _category;
            })
            .reduce((obj, key) => {
                obj[key] = _items[key];
                return obj;
            }, {});
            setItemsFiltered(filtered);
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
            <ItemCategories categories={categories} />
            <h3>Productos</h3>
            <p className="subtitle">Nuestros diseños / Plata 925</p>
            <ItemList items={itemsFiltered} />
        </div>
        <Footer />
        </>
    )
};

export default ItemListContainer;