import "./App.css";

class Product {
  constructor(_name, _code, _price, _qty) {
    this.name = _name;
    this.code = _code;
    this.price = _price;
    this.quantity = _qty;
  }
}

const products = [
  new Product("Red Plate", "R01", 32.95),
  new Product("Green Plate", "G01", 24.95),
  new Product("Blue Plate", "B01", 7.95),
];

const costs = {
  lessThan50: 4.95,
  lessThan90: 2.95,
  greaterThan90: 0,
};

const offers = ["Buy one red get second half price"];

const basket = [];

const addToBasket = (product) => {
  basket.push(product);
};

function App() {
  return <div>Salam</div>;
}

export default App;
