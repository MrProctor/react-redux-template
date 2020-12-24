export const GET_USER = 'GET_USER';

const initialState = {};

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.data;
    default:
      return state;
  }
};
