/*
Постановка задачи

Найти финальную цену первого попавшегося товара с учетом скидки. Если по какой-либо причине будут переданы неправильные данные, вывести строку "No data".
*/

// data
const data = {
  products: [
    {
      name: 'Some book',
      type: 'book',
      price: 12,
    },
    {
      name: 'All about JavaScript',
      type: 'book',
      price: 22,
      discount: 20,
    },
    {
      name: 'All about PHP',
      type: 'book',
      price: 33,
      discount: 15,
    },
  ],
};

// functor
function Maybe(value) {
  const isNothing = () => {
    return value === null || value === undefined;
  };

  const map = (fn) => {
    return isNothing() ? Maybe() : Maybe(fn(value));
  };

  const getValueOrFallback = (fallbackValue) =>
    isNothing() ? fallbackValue : value;

  return {
    map,
    getValueOrFallback,
  };
}

// Simple usage maybe with data

// cool data
// const modifiedLine = Maybe('Hello')
//   .map((x) => x.substring(1))
//   .getValueOrFallback('fallback');

// console.log(modifiedLine);

// bad data
// const badData = Maybe(null)
//   .map((x) => x.substring(1))
//   .getValueOrFallback('fallback');

// console.log(badData);

const isProductWithDiscount = (product) => {
  return !isNaN(product.discount);
};
const findFirstDiscounted = (products) => {
  return products.find(isProductWithDiscount);
};
const calcPriceAfterDiscount = (product) => {
  return product.price - product.discount;
};

// the main task solution with maybe (see above)
const goodPrice = Maybe(data)
  .map((x) => x.products)
  .map(findFirstDiscounted)
  .map(calcPriceAfterDiscount)
  .getValueOrFallback('No data');

console.log(goodPrice); // the value should be 2
