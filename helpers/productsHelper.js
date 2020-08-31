export const getProducts = (payload) => {
  return payload;
};

export const addProduct = (data) => {
  console.log("addProduct", data);
  let isProductInCart = false;
  data.cartProducts.forEach((product) => {
    if (product.id == data.product.id) {
      product.quantity += 1;
      isProductInCart = true;
    }
  });
  if (!isProductInCart) {
    data.product.quantity = 1;
    data.cartProducts.push(data.product);
  }
  return data.cartProducts;
};

export const addProductQuantity = (data) => {
  console.log("addProductQuantity", data);
  data.cartProducts.forEach((product) => {
    if (product.id == data.product.id) {
      product.quantity += 1;
    }
  });
  return data.cartProducts;
};

export const subtractProductQuantity = (data) => {
  console.log("subtractProductQuantity", data);
  if (data.product.quantity > 1) {
    data.cartProducts.forEach((product) => {
      if (product.id == data.product.id) {
        product.quantity -= 1;
      }
    });
  }
  return data.cartProducts;
};

export const removeProduct = (data) => {
  console.log("removeProduct", data);
  data.cartProducts = data.cartProducts.filter((product) => {
    return product.id !== data.product.id;
  });
  return data.cartProducts;
};

export const getOrderTotal = (data) => {
  console.log("getOrderTotal", data);
  let orderTotal = 0;
  data.cartProducts.forEach((product) => {
    orderTotal += product.price * product.quantity
  });
  return orderTotal;
};
