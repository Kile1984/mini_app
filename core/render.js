import { state } from "../state/state.js";
import { shopView } from "../views/shopView.js";
import { cartView } from "../views/cartView.js";

const app = document.querySelector("#app");

const views = {
  shop: shopView,
  cart: cartView,
};

export const render = function () {
  const view = views[state.currentView];
  if (!view) return;
  console.log(view);
  app.innerHTML = view();
};
