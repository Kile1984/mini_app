export const createCartView = function (appEl) {
  return {
    render(state) {
      const markup = `
       <h1>Shop</h1>
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
              >
                +
              </button>

                 <button
                data-action="qt-decrement"
                data-id="${p.id}"
              >
               -
              </button>
             
              <button
                data-action="remove-cart"
                data-id="${p.id}"
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
