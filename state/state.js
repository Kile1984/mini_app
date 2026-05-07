export const state = {
  currentView: "shop",
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
    },
    {
      id: 2,
      name: "Phone",
      price: 500,
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
    },
  ],

  cart: JSON.parse(localStorage.getItem("cart")) || [],

  getCartProductById(id) {
    return this.cart.find((p) => p.id === id);
  },

  addToCart(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) return;

    const existing = this.cart.find((item) => item.id === id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  removeFromCart(id) {
    const product = this.cart.find((item) => item.id === id);

    if (!product) return;

    this.cart = this.cart.filter((p) => p.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  incrementQuantity(id) {
    const product = this.getCartProductById(id);
    if (!product) return;

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  decrementQuantity(id, qt) {
    const product = this.getCartProductById(id);

    if (!product) return;

    if (!Number.isFinite(qt) || qt < 1) {
      this.removeFromCart(id);
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  setView(view) {
    this.currentView = view;
  },
};
