import request from "superagent";

const baseUrl = "http://localhost:4000";

//login action
function makeLogin(loginData) {
  return {
    type: "LOGGED_IN",
    payload: loginData
  };
}

export function login(email, password) {
  return async function(dispatch) {
    try {
      const response = await request
        .post(`${baseUrl}/login`)
        .send({ email, password });

      const action = makeLogin(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

//signup action
function createUser(userName) {
  return {
    type: "CREATE_USER",
    payload: userName
  };
}

export function signup(email, password, username) {
  return async function(dispatch) {
    try {
      const response = await request
        .post(`${baseUrl}/user`)
        .send({ email, password, username });
      const action = createUser(response.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

//logout action
export function logout() {
  return {
    type: "LOG_OUT",
    payload: ""
  };
}