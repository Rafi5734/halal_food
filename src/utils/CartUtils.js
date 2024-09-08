import Cookies from "js-cookie";

export const getCart = () => {
  const cart = Cookies.get("cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart) => {
  Cookies.set("cart", JSON.stringify(cart), { expires: 7 }); // Cookie expires in 7 days
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingProductIndex = cart.findIndex(
    (item) => item.productId === product._id
  );

  if (existingProductIndex > -1) {
    alert("Product already added to the cart!");
    // cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new product
  }

  saveCart(cart);
};

export const removeFromCart = (productId) => {
  const cart = getCart().filter((item) => item._id !== productId);
  saveCart(cart);
};

export const incrementQuantity = (productId) => {
  const cart = getCart();

  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    cart[productIndex].quantity = (cart[productIndex].quantity || 0) + 1;
    // console.log("Updated quantity for product:", cart[productIndex].quantity);
    saveCart(cart);
    // console.log("Cart after saving:", getCart()); // Verify saved cart
  } else {
    console.log("Product not found");
  }
};

export const decrementQuantity = (productId) => {
  const cart = getCart();
  const productIndex = cart.findIndex((item) => item._id === productId);

  if (productIndex > -1) {
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1;
    } else {
      cart.splice(productIndex, 1); // Remove product if quantity is 1
    }
    saveCart(cart);
  }
};

export const calculateTotalPrice = () => {
  const cart = getCart(); // Fetch the cart from cookies or local storage

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0); // Initialize total as 0

  return totalPrice;
};

export const clearCart = () => {
  Cookies.remove("cart");
};
