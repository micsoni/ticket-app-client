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
    }
  };


