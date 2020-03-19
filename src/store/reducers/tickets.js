const initialState = { all:{}, current: ""}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "CURRENT_TICKET": {
      return {...state, current:action.payload}
    }
    case "ALL_TICKETS": {
      return {...state, all:action.payload}
    }
    default:
      return state;
  }
}
