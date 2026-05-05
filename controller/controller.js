import { state } from "../state/state.js";
import { render } from "../core/render.js";

export const goToCart = function () {
  state.setView("cart");
  render();
};

export const goToShop = function () {
  state.setView = "shop";
  render();
};
