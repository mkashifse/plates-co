import { useState } from "react";

export const useProductCatalogue = () => {
  // Product Catalog
  const [products, setProducts] = useState([]);

  // Add new product
  const addProduct = ({ name, code, price, image, isOffer }) => {
    setProducts([
      ...products,
      {
        name,
        code,
        price,
        image,
        isOffer,
      },
    ]);
  };

  const initProducts = () => {
    const prods = [
      {
        name: "Red Plate",
        code: "R01",
        price: 32.95,
        isOffer: true,
        image: "red.png",
      },
      {
        name: "Green Plate",
        code: "G01",
        price: 24.95,
        isOffer: false,
        image: "green.png",
      },
      {
        name: "Blue Plate",
        code: "B01",
        price: 7.95,
        isOffer: false,
        image: "blue.jpeg",
      },
    ];
    setProducts(prods);
  };

  // Remove a product from catalog
  const removeProduct = (code) => {
    setProducts([...products.filter((item) => item.code !== code)]);
  };

  return {
    products,
    addProduct,
    initProducts,
    removeProduct,
  };
};
