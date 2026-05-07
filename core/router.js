import { state } from "../state/state.js";
import { render } from "./render.js";

export const handleRoute = function () {
  const hash = window.location.hash.slice(1);

  const validRoutes = ["shop", "cart"];

  // if (!validRoutes.includes(hash)) {
  //   state.setView("shop");
  // } else {
  //   state.setView(hash);
  // }

  validRoutes.includes(hash) ? state.setView(hash) : state.setView("shop");

  render();
};
