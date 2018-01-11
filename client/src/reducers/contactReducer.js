import { SET_ALL_CONTACTS } from './../actions/types';

const initialState = {
  contacts: []
};

/**
 * Contact Reducer
 *
 * @description Returns each action by its type
 *
 * @param {array} state - The state passed to the contactReducer
 * @param {object} action - The action passed to the contactReducer
 *
 * @returns {object} array of contacts - Returns contact(s)
 */
const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_CONTACTS: {
      return { ...state, contacts: action.contacts };
    }
    default: return state;
  }
};

export default contactReducer;
