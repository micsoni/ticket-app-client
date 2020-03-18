import request from "superagent";

const baseUrl = "http://localhost:4000";

function currentTicket(ticketData) {
  return {
    type: "CURRENT_TICKET",
    payload: ticketData
  };
}
export function getCurrentTicket(id) {
  return async function(dispatch) {
    try {
      const response = await request.get(`${baseUrl}/ticket/${id}`);
      const action = currentTicket(response.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

function changeTicket(newTicket) {
  return {
    type: "CHANGE_TICKET",
    payload: newTicket
  };
}

export function updateTicket(id, update) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;
    try {
      const response = await request
        .put(`${baseUrl}/ticket/${id}`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`)
        .send(update);

      const action = changeTicket(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export const destroyTicket = ticketId => ({
  type: "TICKET_DELETE_SUCCESS",
  payload: ticketId
});

export function deleteTicket(id) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;
    try {
      await request
        .delete(`${baseUrl}/ticket/${id}`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`);

      const action = destroyTicket(id);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export function createTicket(data) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;
    const { events } = state;
    try {
      await request
        .post(`${baseUrl}/ticket`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`)
        .send({
          ...data,
          userId: user.loginInfo.id,
          eventId: events.current.id
        });
    } catch (error) {
      console.error(error);
    }
  };
}

export function createComment(data) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;
    const { ticket } = state;

    try {
      await request
        .post(`${baseUrl}/ticket/${ticket.id}/comment`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`)
        .send({ ...data, userId: user.loginInfo.id, ticketId: ticket.id });
    } catch (error) {
      console.error(error);
    }
  };
}
