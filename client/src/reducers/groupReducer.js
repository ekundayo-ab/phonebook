// Declare the initial state for Authentication
const initialState = {
  user: {},
  userExists: ''
};

/**
 * Authentication Reducer
 *
 * @description Returns each action by its type
 *
 * @param {array} state - The state passed to the authReducer
 * @param {object} action - The action passed to the authReducer
 *
 * @returns {object} User(s), isAuthenticated - Returns user(s) and their
 * authentication state
 */
const groupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default groupReducer;
