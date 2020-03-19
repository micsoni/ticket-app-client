import request from "superagent";

const baseUrl = "http://localhost:4000";

// action to get current ticket for the ticket details page
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

// action to update ticket
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

// action to delete ticket
function destroyTicket(ticketId) {
  return {
    type: "TICKET_DELETE_SUCCESS",
    payload: ticketId
  };
}

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

// thunk to create ticket **it doesn't send a action to the store, in the component a new get request is done
// (due to sequelize relations i was missing and to recalculate risk)
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

// thunk to create comment **it doesn't send a action to the store, in the component a new get request is done
// (due to sequelize relations i was missing and to recalculate risk)
export function createComment(data) {
  return async function(dispatch, getState) {
    const state = getState();
    const { user } = state;
    const { tickets } = state;

    try {
      await request
        .post(`${baseUrl}/ticket/${tickets.current.id}/comment`)
        .set("Authorization", `Bearer ${user.loginInfo.jwt}`)
        .send({ ...data, userId: user.loginInfo.id, ticketId: tickets.current.id });
    } catch (error) {
      console.error(error);
    }
  };
}

function allTickets(ticketsData) {
  return {
    type: "ALL_TICKETS",
    payload: ticketsData
  };
}

export function getTickets(currentPage, offset) {
  return async function(dispatch, getState) {
    const state = getState();
    const { tickets } = state;

    if (!tickets.all.length) {
      try {
        const response = await request.get(
          `${baseUrl}/ticket?limit=9&page=${currentPage}&offset=${offset}`
        );
        const action = allTickets(response.body);
        dispatch(action);
      } catch (error) {
        console.error(error);
      }
    }
  };
}