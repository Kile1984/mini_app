export const createShopView = function (appEl) {
  return {
    render(state) {
      if (state.loading) {
        appEl.innerHTML = "<p>Loading...</p>";
        return;
      }

      if (state.error) {
        appEl.innerHTML = `<p>Error: ${state.error}</p>`;
        return;
      }

      const markup = `
       <h1>Shop</h1>
        <ul>
        ${state.products
          .map(
            (p) => `
           <li>
            <span>ID: ${p.id}</span>
            <strong>${p.name}</strong>
            <span>ID: ${p.price}</span>
             
              <button
                data-action="add-cart"
                data-id="${p.id}"
                data-cart-action="add"
              >
                Add to cart
              </button>
            </li>
          `,
          )
          .join("")}
           
        </ul>`;

      appEl.innerHTML = markup;
    },
  };
};
