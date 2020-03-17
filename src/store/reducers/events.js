const initialState = { all: [], current:{} };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_EVENTS": {
      return {
        ...state,
        all: action.payload
      };
    }
    case "CURRENT_EVENT": {
      return {
        ...state,
        current: action.payload
      };
    }
    default:
      return state;
  }
}
