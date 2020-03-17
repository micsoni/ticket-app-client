const initialState = { all: {}, current:{}, sample:[] };

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

    case "SAMPLE_EVENTS": {
      return {
        ...state,
        sample: action.payload
      };

    }
    default:
      return state;
  }
}
