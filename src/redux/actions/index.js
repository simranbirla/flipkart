export const addCart = (item) => {
  return { type: "ADD_CART", payload: item };
};

export const removeCart = (item) => {
  return { type: "REMOVE_CART", payload: item };
};

export const increaseItem = (item) => {
  return { type: "INCREASE_ITEM", payload: item };
};

export const decreaseItem = (item) => {
  return { type: "DECREASE_ITEM", payload: item };
};

export const saveLater = (item) => {
  return { type: "ADD_SAVE", payload: item };
};
