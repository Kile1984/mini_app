import { state } from "../state/state.js";
import { render } from "../core/render.js";

export const goToShop = function () {
  window.location.hash = "#shop";
};

export const goToCart = function () {
  window.location.hash = "#cart";
};

export const handleAddToCart = function (id) {
  state.addToCart(id);
  render();
};

export const handleRemoveFromCart = function (id) {
  state.removeFromCart(id);
  render();
};

export const handleIncrementQuantity = function (id) {
  const product = state.getCartProductById(id);
  product.quantity++;

  state.incrementQuantity(id, product.quantity);

  render();
};

export const handleDecrementQuantity = function (id) {
  const product = state.getCartProductById(id);
  product.quantity--;

  state.decrementQuantity(id, product.quantity);

  render();
};

// Refaktorisati add i remove u jednu toggleCart funkciju i proslediti joj akciju i id
