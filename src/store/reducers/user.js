//import { defineState } from "redux-localstore";

// const defaultState = "";

// const initialState = defineState(defaultState)("userLoggedIn");


const initialState = ""

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGGED_IN": {
      return action.payload;
    }
    case "CREATE_USER": {
      return action.payload;
    }
    case "LOG_OUT": {
      return action.payload;
    }

    default:
      return state;
  }
}
