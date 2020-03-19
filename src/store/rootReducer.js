import { combineReducers } from "redux";
import user from "./reducers/user";
import events from "./reducers/events";
import tickets from "./reducers/tickets";

export default combineReducers({
  user,
  events,
  tickets
});
