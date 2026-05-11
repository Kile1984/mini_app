import { createCartView } from "./cartView.js";
import { createShopView } from "./shopView.js";

const appEl = document.querySelector("#app");

export const views = {
  shop: createShopView(appEl),
  cart: createCartView(appEl),
};
