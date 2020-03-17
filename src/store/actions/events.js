import request from "superagent";

const baseUrl = "http://localhost:4000";


function allEvents(eventData) {
  return {
    type: "ALL_EVENTS",
    payload: eventData
  };
}
export function getEvents() {
  return async function(dispatch, getState) {
    const state = getState();
    const { events } = state;

    if (!events.all.length) {
      try {
        const response = await request.get(`${baseUrl}/event`);
        const action = allEvents(response.body);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };
}

function currentEvent(eventData) {
  return {
    type: "CURRENT_EVENT",
    payload: eventData
  };
}
export function getCurrentEvent(id) {
  return async function(dispatch) {
     try {
        const response = await request.get(`${baseUrl}/event/${id}`);
        const action = currentEvent(response.body);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };


