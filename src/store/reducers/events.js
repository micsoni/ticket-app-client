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
    // checks if it is past event, if so, doesn't show
    case "NEW_EVENT": {
      const updatedEvents =
        action.payload.endDate > new Date()
          ? state.all.rows.concat(action.payload)
          : state.all.rows;

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
