import request from "superagent";

const baseUrl = "http://localhost:4000";

function allEvents(eventsData) {
  return {
    type: "ALL_EVENTS",
    payload: eventsData
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
  return async function(dispatch, getState) {
   
    try {
      const response = await request.get(
        `${baseUrl}/event/${id}`
      );
      const action = currentEvent(response.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

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
        const response = await request.get(`${baseUrl}/event?limit=3`);
        const action = sampleEvents(response.body.rows);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };
}


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
