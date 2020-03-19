const initialState = null;

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ERROR": {
      return action.payload;
    }
    case "ERASE_ERROR": {
      return action.payload;
    }
    default:
      return state;
  }
}
