const SaveLater = (state = [], action) => {
  switch (action.type) {
    case "ADD_SAVE":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default SaveLater;
