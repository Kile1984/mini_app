import { views } from "../app.js";
import { state } from "../state/state.js";

export const render = function () {
  views[state.currentView]?.render(state);
};
