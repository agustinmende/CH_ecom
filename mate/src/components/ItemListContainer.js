import { useParams } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import ItemList from "../components/ItemList";
import ItemCategories from "../components/ItemCategories";
import Slider from '../components/Slider';
import HomeBanner from '../components/HomeBanner';
import Footer from '../components/Footer';
import { getFirestore } from '../configs/Firebase';




import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};




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
        //console.log("Cargado");
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

const slides = [
    <Slide><HomeBanner /></Slide>,
    <Slide>
        <div className="home_unite"><img src={"/images/unite.png"} alt={""} /></div>
        {/*<div className="listContainer">
              {
                  categories === ''
                      ? <span >Cargando</span>
                      : <>
                          < ItemCategories categories={categories} />
                      </>
              }
              {
                  itemsFiltered === 'Categoria no encontrada'
                      ? <h3>Categoria: {idCategory} </h3>
                      : itemsFiltered === ''
                          ? <span>...</span>
                          : <>
                              <p className="subtitle">Nuestros diseños / Plata 925</p>
                              <ItemList items={itemsFiltered} />
                          </>
              }
            </div>*/}
            <div className="listContainer">
                {
                    itemsFiltered === 'Categoria no encontrada'
                    ? <h3>Categoria: {idCategory} </h3>
                    : itemsFiltered === ''
                        ? <span>...</span>
                        : <>
                            
                            <ItemList items={itemsFiltered} />
                        </>
                }
            </div>
    </Slide>
  ];
  
  fullPageOptions.slides = slides;

    return (
        <>
            <Fullpage {...fullPageOptions} />
            
            
            <Footer />
        </>
    )
};

export default ItemListContainer;