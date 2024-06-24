// функция для получения данных из хранилища под ключом cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
// в cart лежит данные с localStorage

//функция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};

//функция totalPrice для вывода общей суммы
// export const calcTotalPrice = (products) => {
//   const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice);
//   const totalPricePrice = products.reduce(
//     (acc, curr) => acc + curr.item.price,
//     0
//   );

//   const total2 = products.reduce(
//     (acc, curr) => acc + curr.subPrice
//     // curr.item.price
//   );
//   return totalPrice == 0 ? totalPricePrice : total2;
// };

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => {
    if (curr.subPrice === 0 || curr.subPrice == null) {
      return acc + curr.item.price;
    } else {
      return acc + curr.subPrice;
    }
  }, 0);
  return totalPrice;
};

// функция для вывода кол-во товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.length : 0;
};
