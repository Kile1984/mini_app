export const state = {
  currentView: "shop",
  loading: false,
  error: null,
  products: [],

  cart: JSON.parse(localStorage.getItem("cart")) || [],

  getCartProductById(id) {
    return this.cart.find((p) => p.id === id);
  },

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
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

    this.saveCart();
  },

  removeFromCart(id) {
    this.cart = this.cart.filter((p) => p.id !== id);

    this.saveCart();
  },

  incrementQuantity(id) {
    const product = this.getCartProductById(id);
    if (!product) return;

    product.quantity++;

    this.saveCart();
  },

  decrementQuantity(id) {
    const product = this.getCartProductById(id);

    if (!product) return;

    product.quantity--;

    if (product.quantity < 1) {
      this.removeFromCart(id);
      return;
    }

    this.saveCart();
  },

  setView(view) {
    this.currentView = view;
  },

  setLoading(isLoading) {
    this.loading = isLoading;
  },

  setError(error) {
    this.error = error;
  },
};
