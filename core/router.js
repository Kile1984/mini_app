import { state } from "../state/state.js";
import { render } from "./render.js";
import { loadProducts } from "../controller/controller.js";

export const handleRoute = async function () {
  const hash = window.location.hash.slice(1);

  const validRoutes = ["shop", "cart"];

  validRoutes.includes(hash) ? state.setView(hash) : state.setView("shop");

  if (state.currentView === "shop") {
    await loadProducts();
    return;
  }
  render();
};
