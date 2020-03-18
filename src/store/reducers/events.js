const initialState = { all: {}, current: {}, sample: [] };

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

    case "NEW_EVENT": {
      const updatedEvents = state.all.rows.concat(action.payload);
      const completeEvents = { ...state.all, rows: updatedEvents };
      return {
        ...state,
        all: completeEvents
      };
    }
    default:
      return state;
  }
}
