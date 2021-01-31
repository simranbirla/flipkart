const SaveLater = (state = [], action) => {
  switch (action.type) {
    case "ADD_SAVE":
      return [...state, action.payload];
    case "REMOVE_SAVE":
      const arr = state.filter((obj) => obj.id !== action.payload);
      return [...arr];

    default:
      return state;
  }
};

export default SaveLater;
