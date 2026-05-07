import { handleRoute } from "./core/router.js";
import { createShopView } from "./views/shopView.js";
import { createCartView } from "./views/cartView.js";
import {
  goToCart,
  goToShop,
  handleAddToCart,
  handleRemoveFromCart,
} from "./controller/controller.js";

const appEl = document.querySelector("#app");

export const views = {
  shop: createShopView(appEl),
  cart: createCartView(appEl),
};

const actions = {
  "go-shop": () => goToShop,
  "go-cart": () => goToCart,
  "add-cart": (id) => handleAddToCart,
  "remove-cart": (id) => handleRemoveFromCart,
};

document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-action]");

  if (!target) return;

  const action = target.dataset.action;
  const id = Number(target.dataset.id);

  actions[action]?.(id);
});

window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);
