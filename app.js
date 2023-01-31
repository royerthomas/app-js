import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [completeCategoriesList, setCompleteCatagoriesList] = useState([]);
  const [
    completeCategoriesListWithObj,
    setCompleteCatagoriesListWithObj
  ] = useState([]);

  const cart = [
    {
      id: "0",
      name: "Service One",
      category: "CUISINE",
      price: 10,
      quantity: 2,
      priceTTC: 10.55,
      tva: 5.5,
      tvaAmount: 0.55
    },
    {
      id: "1",
      name: "Service Two",
      category: "SALLE DE BAIN",
      price: 15,
      quantity: 2,
      priceTTC: 15.82,
      tva: 5.5,
      tvaAmount: 0.82
    },
    {
      id: "2",
      name: "Service Three",
      category: "CUISINE",
      price: 9
    },
    {
      id: "3",
      name: "Service Four",
      category: "CHAMBRE 1",
      price: 120
    },
    {
      id: "4",
      name: "Service Five",
      category: "CHAMBRE",
      price: 100
    },
    {
      id: "5",
      name: "Service Other",
      category: "",
      price: 100
    }
  ];

  const getAllCategoriesList = () => {
    const categoriesList = [];
    cart.map((item) => categoriesList.push(item.category));
    let uniqueCategories = [...new Set(categoriesList)];
    setCompleteCatagoriesList(uniqueCategories);
  };

  const createObjectForEachCategorie = () => {
    const formatedData = [];
    completeCategoriesList.forEach((item) => {
      // get object product who match with item
      let productObj = cart.filter((cartItem) => cartItem.category === item);

      formatedData.push({ name: item, productsList: productObj });
    });
    //console.log("Formated data " + JSON.stringify(formatedData));
    setCompleteCatagoriesListWithObj(formatedData);
  };

  const addProductInEachProductsList = () => {
    // cart.product.category === completeCategorieListWithObj.name ? add this product in product list array
  };

  return (
    <div className="App">
      <h1>Categorie List</h1>
      {completeCategoriesList?.map((item) => (
        <p>{item}</p>
      ))}

      <h1>Formated Data with categorie and product list</h1>
      <p>{JSON.stringify(completeCategoriesListWithObj)}</p>

      <button onClick={() => getAllCategoriesList()}>
        Generate Categorie List
      </button>
      <button onClick={() => createObjectForEachCategorie()}>
        Generate Formated Obj
      </button>
    </div>
  );
}
