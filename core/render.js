import { state } from "../state/state.js";
import { shopView } from "../views/shop.js";
import { cartView } from "../views/cart.js";

const app = document.querySelector("#app");

export const render = function () {
  if (state.currentView === "shop") {
    app.innerHTML = shopView();
  } else if (state.currentView === "cart") {
    app.innerHTML = cartView();
  }
};
