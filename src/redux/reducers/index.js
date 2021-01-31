import { combineReducers } from "redux";
import Addcart from "./Addcart";
import Savelater from "./SaveLater";

export default combineReducers({
  cart: Addcart,
  save: Savelater,
});
