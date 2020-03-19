import request from "superagent";

const baseUrl = "http://localhost:4000";

//action to get all the events
function allEvents(eventsData) {
  return {
    type: "ALL_EVENTS",
    payload: eventsData
  };
}

export function getEvents(currentPage, offset) {
  return async function(dispatch, getState) {
    const state = getState();
    const { events } = state;

    if (!events.all.length) {
      try {
        const response = await request.get(
          `${baseUrl}/event?limit=9&page=${currentPage}&offset=${offset}`
        );
        const action = allEvents(response.body);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };
}

//action to get current event for the event details page
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
  };
}

//action to get sample of events for the homepage
function sampleEvents(eventsData) {
  return {
    type: "SAMPLE_EVENTS",
    payload: eventsData
  };
}

export function getSampleEvents() {
  return async function(dispatch, getState) {
    const state = getState();
    const { events } = state;

    if (!events.sample.length) {
      try {
        const response = await request.get(`${baseUrl}/event?limit=4&page=1`);
        const action = sampleEvents(response.body.rows);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };
}

//action to create new event
function newEvent(eventData) {
  return {
    type: "NEW_EVENT",
    payload: eventData
  };
}

export function createEvent(data) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;

    try {
      const response = await request
        .post(`${baseUrl}/event`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`)
        .send(data);

      const action = newEvent(response.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
