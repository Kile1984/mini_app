import { handleRoute } from "./core/router.js";
import { createShopView } from "./views/shopView.js";
import { createCartView } from "./views/cartView.js";
import {
  goToPage,
  handleToggleCart,
  handleQuantity,
} from "./controller/controller.js";

const appEl = document.querySelector("#app");

export const views = {
  shop: createShopView(appEl),
  cart: createCartView(appEl),
};

const actions = {
  "go-to-page": goToPage,
  "add-cart": handleToggleCart,
  "remove-cart": handleToggleCart,
  "qt-increment": handleQuantity,
  "qt-decrement": handleQuantity,
};

document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-action]");

  if (!target) return;

  const action = target.dataset.action;
  const id = Number(target.dataset.id);
  const page = target.dataset.page;

  actions[action]?.({
    id,
    page,
    action,
  });
});

window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);
