import { combineReducers } from "redux";
import user from "./reducers/user";
import events from "./reducers/events";
import ticket from "./reducers/ticket"
export default combineReducers({
  user,
  events,
  ticket
});
