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

  setView(view) {
    this.currentView = view;
  },
};
