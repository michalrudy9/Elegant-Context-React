const { createContext } = require("react");

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});
