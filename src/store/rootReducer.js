import { combineReducers } from "redux";
import user from "./reducers/user";
import events from "./reducers/events";
import tickets from "./reducers/tickets";
import error from "./reducers/error";

export default combineReducers({
  user,
  events,
  tickets,
  error
});
