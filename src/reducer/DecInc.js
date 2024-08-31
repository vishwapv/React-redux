const intialState = 10;

const changeNumber = (state = intialState, action) => {
  switch (action.type) {
    case "INC_NUMBER":
      return state + 1;

    case "DEC_NUMBER":
      return state - 1;

    default:
      return state;
  }
};
export default changeNumber;
