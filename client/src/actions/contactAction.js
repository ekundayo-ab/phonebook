import axios from 'axios';
import { SET_ALL_CONTACTS } from './types';
import { notify } from './../helpers/utils';

const setContacts = (contacts) => {
  return {
    type: SET_ALL_CONTACTS,
    contacts
  };
};

const getAllContacts = () => {
  return dispatch => {
    return axios.get('/api/v1/contacts')
      .then((res) => {
        dispatch(setContacts(res.data.contacts));
      }).catch((err) => {
        notify(err.response.statusText, 'green', 2000);
      });
  };
};

export {
  setContacts,
  getAllContacts
};
