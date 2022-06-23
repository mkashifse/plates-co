import { useEffect, useState } from "react";
import "./App.css";
import { ProductCard } from "./components";
import { Button } from "./components/kit";
import { useBasket } from "./hooks/useBasket";
import { useProductCatalogue } from "./hooks/useProductCatalogue";

function App() {
  const { products, initProducts } = useProductCatalogue();
  const { onClear, basket, getTotalPrice, addToBasket } = useBasket();

  useEffect(() => {
    initProducts();
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-between p-4 border-b  bg-white space-x-4">
        <h1 className="font-bold flex-grow">Plates Co.</h1>
        <div
          className="rounded-xl bg-gray-200 px-4 p-1"
          data-testid="totalPrice"
        >
          {basket.length ? getTotalPrice() : "--"}
        </div>
        <Button onClick={onClear} data-testid="clearBasket">
          Clear Basket
        </Button>
      </div>
      <div className="bg-gray-600 text-xs p-1 flex items-center text-white px-4">
        <p>BASKET TEST:</p>
        <div className="ml-4 font-bold">
          {basket.map((item) => item.code).join(", ")}
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 px-4">
          {products.map((item, i) => (
            <div className="p-2" key={i}>
              <ProductCard
                {...item}
                onAdd={() => addToBasket(item)}
              ></ProductCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
