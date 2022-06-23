import { useState } from "react";
import { truncate } from "../utility/util";

export const COST1 = 4.95; // under 50
export const COST2 = 2.95; // under between 50 - 90
export const COST3 = 0; // above 90

export const useBasket = (offerProductCode = "R01") => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {
    const list = [...basket, item];
    setBasket(list);
  };

  const applyDeliveryCharges = (sum) => {
    // Cost for Order under 50
    if (sum < 50) {
      return sum + COST1;
    }

    // Cost for Order between 50 and 90
    else if (sum < 90 && sum >= 50) {
      return sum + COST2;
    }

    // Cost for Order 90 and higher
    else {
      return sum;
    }
  };

  const sumWithOfferOn = (code) => {
    const reds = basket.filter((item) => item.code === code);
    if (reds.length % 2 === 0) {
      return (reds.length / 2) * 32.95 + ((reds.length / 2) * 32.95) / 2;
    } else {
      const length = reds.length - 1;
      return (length / 2) * 32.95 + ((length / 2) * 32.95) / 2 + 32.95;
    }
  };

  const getTotalPrice = () => {
    let sumWithoutOffer = basket
      .filter((item) => !item.isOffer)
      .reduce((pre, curr) => pre + curr.price, 0);

    const total = applyDeliveryCharges(
      sumWithoutOffer + sumWithOfferOn(offerProductCode)
    );
    return basket.length ? "$" + truncate(total) : "--";
  };

  const onClear = () => {
    setBasket([]);
  };

  return {
    basket,
    onClear,
    getTotalPrice,
    sumWithOfferOn,
    applyDeliveryCharges,
    addToBasket,
  };
};
