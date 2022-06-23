import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components";
import { Button, Input } from "./components/kit";

class Plate {
  constructor(_name, _code, _price, _isOffer = false) {
    this.name = _name;
    this.code = _code;
    this.price = _price;
    this.isOffer = _isOffer;
  }

  static getRed(price = 32.95) {
    return new Plate("Red Plate", "R01", price, true);
  }

  static getGreen(price = 24.95) {
    return new Plate("Green Plate", "G01", price);
  }

  static getBlue(price = 7.95) {
    return new Plate("Blue Plate", "B01", price);
  }
}

const COST1 = 4.95;
const COST2 = 2.95;
const COST3 = 0;

function App() {
  const [products, setProducts] = useState([
    Plate.getRed(),
    Plate.getGreen(),
    Plate.getBlue(),
  ]);

  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    const list = [...basket, item];
    setBasket(list);
  };

  const applyCostRules = (sum) => {
    // Cost for Order under 50
    if (sum < 50) {
      return sum + COST1;
    }

    // Cost for Order between 90 and 50
    else if (sum < 90 && sum >= 50) {
      return sum + COST2;
    }

    // Cost for Order 90 and higher
    else {
      return sum;
    }
  };

  const truncate = (number, index = 2) => {
    return +number
      .toString()
      .slice(0, number.toString().indexOf(".") + (index + 1));
  };

  const applyOfferOnRed = () => {
    const reds = basket.filter((item) => item.code === "R01");
    if (reds.length % 2 === 0) {
      return (reds.length / 2) * 32.95 + ((reds.length / 2) * 32.95) / 2;
    } else {
      const length = reds.length - 1;
      return (length / 2) * 32.95 + ((length / 2) * 32.95) / 2 + 32.95;
    }
  };

  const getTotalPrice = () => {
    let sum = basket
      .filter((item) => item.code !== "R01")
      .reduce((pre, curr) => pre + curr.price, 0);

    const total = applyCostRules(sum + applyOfferOnRed());
    return basket.length ? "$" + truncate(total) : "";
  };

  const onClear = () => {
    setBasket([]);
  };

  return (
    <div className="">
      <div className="flex items-center justify-between p-4 border-b  bg-white space-x-4">
        <h1 className="font-bold flex-grow">Plates Co.</h1>
        <div className="rounded-xl bg-gray-200 px-4 p-1">
          {basket.length ? getTotalPrice() : "--"}
        </div>
        <Button onClick={onClear}>Clear Basket</Button>
      </div>
      <div className="bg-gray-600 text-xs p-1 flex items-center text-white px-4">
        <p>BASKET TEST:</p>
        <div className="ml-4 font-bold">
          {basket.map((item) => item.code).join(", ")}
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-6">
          {products.map((item, i) => (
            <div className="px-2" key={i}>
              <ProductCard
                {...item}
                isOffer={item.isOffer}
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
