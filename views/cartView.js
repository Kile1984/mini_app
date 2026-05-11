export const createCartView = function (appEl) {
  return {
    render(state) {
      if (!state.cart.length) {
        appEl.innerHTML = "<p>Cart is empty</p>";
        return;
      }

      const markup = `
       <h1>Cart</h1>
        <ul>
        ${state.cart
          .map(
            (p) => `
           <li>
            <span>ID: ${p.id}</span>
            <strong>${p.name}</strong>
             <span>ID: ${p.price}</span>
              <span>QT: ${p.quantity}</span>

                
              <button
                data-action="qt-increment"
                data-id="${p.id}"
                data-qt-action="inc"
              >
                +
              </button>

                 <button
                data-action="qt-decrement"
                data-id="${p.id}"
                data-qt-action="dec"
              >
               -
              </button>
             
              <button
                data-action="remove-cart"
                data-id="${p.id}"
                data-cart-action="remove"
              >
                X
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
