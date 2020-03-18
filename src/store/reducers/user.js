import { defineState } from "redux-localstore";

const defaultState = { loginInfo: "", tickets: "" };

const initialState = defineState(defaultState)("user");

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGGED_IN": {
      return { ...state, loginInfo: action.payload };
    }
    case "CREATE_USER": {
      return { ...state, loginInfo: action.payload };
    }
    case "LOG_OUT": {
      return { tickets: action.payload, loginInfo: action.payload };
    }
    case "LOGGED_USER_TICKETS": {
      return { ...state, tickets: action.payload };
    }
    case "CHANGE_TICKET": {
      const ticketsUpdated = state.tickets.map(ticket => {
        const condition = ticket.id === action.payload.id;
        if (condition) {
          return {
            ...ticket,
            price: action.payload.price,
            description: action.payload.description,
            pictureUrl: action.payload.pictureUrl
          };
        }
        return ticket;
      });
      return {
        ...state,
        tickets: ticketsUpdated
      };
    }
    case "TICKET_DELETE_SUCCESS": {
      const ticketId = action.payload;
      console.log(action.payload)
      const allMinusDeleted = state.tickets.filter(
        ticket => ticket.id !== ticketId
      );
      return {
        ...state,
        tickets: allMinusDeleted
      };
    }

    default:
      return state;
  }
}
