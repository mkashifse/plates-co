# Plates Co.

A simple [react](https://reactjs.org/) application using [tailwindcss](https://tailwindcss.com/) for design purpose.

### Folder Structure

```

\public
\src
	\component
	\kit
	index.js
	ProductCard.js
	\hooks
		useBasket.js
		useProductCatalogue.js
	\utility
		util.js
App.js
..
..
..
README.md
```

## Custom Hooks

### useProductCatalogue

```
return {
    products, // array:  list of products
    addProduct, // function:  add new product if needed
    initProducts, // function: initialise all products pre populated(HARD CODED)
    removeProduct, // function: remove product if needed
};
```

### useBasket

```
return {
    basket, // array: list of items
    onClear, // function: to clear basket
    getTotalPrice, // function: calculate total price
    sumWithOfferOn, // function: sum products with offer
    applyDeliveryCharges, // function: apply delivery charges on total,  based on rules, currently the rules are hardCoded
    addToBasket, // function: add new item to basket
   };
```

Components and Hooks Daigram:

```mermaid
graph LR
B((useBasket)) -- usingHook -->  A[AppComponent]
C((useProductCatalague)) -- usingHook -->  A[AppComponent]
D[ProductCatalogue] -- Calling Component --> A[AppComponent]

```
