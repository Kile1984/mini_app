import { state } from "../state/state.js";
import { render } from "../core/render.js";
import { fetchProducts } from "../api/productsApi.js";
import { views } from "../views/views.js";

export async function loadProducts() {
  try {
    state.setLoading(true);
    render();

    const products = await fetchProducts();
    state.products = products;
  } catch (err) {
    state.setError("Failed to load products.");
  } finally {
    state.setLoading(false);
    render();
  }
}

export const goToPage = function ({ page }) {
  window.location.hash = `#${page}`;
};

export const handleToggleCart = function ({ id, action }) {
  if (action === "add-cart") {
    state.addToCart(id);
  } else {
    state.removeFromCart(id);
  }

  render();
};

export const handleQuantity = function ({ id, action }) {
  const actions = {
    "qt-increment": () => state.incrementQuantity(id),
    "qt-decrement": () => state.decrementQuantity(id),
  };

  actions[action]?.();

  const product = state.getCartProductById(id);

  if (!product) {
    render();
    return;
  }

  views.cart.updateQuantity({ id, quantity: product.quantity });
};
