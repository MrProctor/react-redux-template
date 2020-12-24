import { GET_USER } from './reducers';

export const getUser = (data) => ({
  type: GET_USER,
  data,
});
