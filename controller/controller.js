import { state } from "../state/state.js";
import { render } from "../core/render.js";

export const goToPage = function ({ page }) {
  window.location.hash = `#${page}`;
};

export const handleToggleCart = function ({ id, action }) {
  if (action === "add-cart") {
    state.addToCart(id);
  } else {
    state.removeFromCart(id);
  }

  render();
};

export const handleQuantity = function ({ id, action }) {
  if (action === "qt-increment") {
    state.incrementQuantity(id);
  } else {
    state.decrementQuantity(id);
  }

  render();
};
