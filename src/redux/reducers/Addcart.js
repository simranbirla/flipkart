const Addcart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      console.log(state);
      const index = state.findIndex((obj) => obj.item.id === action.payload.id);
      console.log(index);
      if (index === -1) {
        return [...state, { item: action.payload, quantity: 1 }];
      } else {
        const new_arr = state.map((obj) =>
          obj.item.id === action.payload.id
            ? { ...obj, quantity: obj.quantity + 1 }
            : obj
        );
        return [...new_arr];
      }

    case "INCREASE_ITEM":
      const new_arr = state.map((obj) =>
        obj.item.id === action.payload
          ? { ...obj, quantity: obj.quantity + 1 }
          : obj
      );
      return [...new_arr];

    case "DECREASE_ITEM":
      const new_arrr = state.map((obj) =>
        obj.item.id === action.payload
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj
      );
      return [...new_arrr];

    case "REMOVE_CART":
      const arr = state.filter((obj) => obj.item.id !== action.payload);
      return [...arr];

    default:
      return state;
  }
};

export default Addcart;
