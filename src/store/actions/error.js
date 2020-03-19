export function errorMessage(message) {
  return { type: "ERROR", payload: message };
}

export function eraseError() {
  return { type: "ERASE_ERROR", payload: null };
}
