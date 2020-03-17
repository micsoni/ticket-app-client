
const initialState = ""

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "CURRENT_TICKET": {
      return action.payload;
    }
    default:
      return state;
  }
}
