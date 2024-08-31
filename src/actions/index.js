export const incNumber = (payload) => {
  return {
    type: "INC_NUMBER",
    payload,
  };
};
export const decNumber = (payload) => {
  return {
    type: "DEC_NUMBER",
    payload,
  };
};
