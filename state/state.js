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

  cart: [],

  addToCart(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) return;

    const existing = this.cart.find((item) => item.id === id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  },

  removeFromCart(id) {
    const product = this.cart.find((item) => item.id === id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {
      this.cart.filter((item) => item.id !== id);
    }
  },

  setView(view) {
    this.currentView = view;
  },
};
