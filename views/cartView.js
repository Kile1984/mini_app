export const cartView = function (parentEl) {
  return {
    render(state) {
      parentEl.innerHTML = `<h1>Cart</h1>`;
    },
  };
};
