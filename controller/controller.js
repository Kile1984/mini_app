// goToShop,goToCart,addToCart,removeFromCart
import { state } from "../state/state.js";
import { render } from "../core/render.js";

export const goToShop = function () {
  window.location.hash = "#shop";
  render();
};

export const goToCart = function () {
  window.location.hash = "#cart";
  render();
};

export const handleAddToCart = function (id) {
  state.addToCart(id);
  render();
};

export const handleRemoveFromCart = function (id) {
  state.removeFromCart(id);
  render();
};

// Refaktorisati add i remove u jednu toggleCart funkciju i proslediti joj akciju i id
