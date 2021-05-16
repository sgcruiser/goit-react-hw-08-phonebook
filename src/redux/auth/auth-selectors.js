const getIsAuthenticated = state => Boolean(state.auth.token);

const getUserName = state => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsAuthenticated,
  getUserName,
};
