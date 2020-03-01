/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import * as actionType from './actionType';

export const fetchUserinfosuccess = (id, account, totalb, name) => ({
  type: actionType.FETCH_USERINFO_SUCCESS,
  userid: id,
  acc: account,
  totalBalance: totalb,
  username: name
});
export const fetchUserinfofail = error => ({
  type: actionType.FETCH_USERINFO_FAIL,
  error
});

export const fetchUserinfostart = () => ({
  type: actionType.FETCH_USERINFO_START
});

// eslint-disable-next-line arrow-body-style
export const fetchUserinfo = () => {
  return (dispatch) => {
    dispatch(fetchUserinfostart());
    axios.get('/api/v1/userinfo')
      .then((response) => {
        // eslint-disable-next-line no-underscore-dangle
        console.log('res', response.data.data);
        dispatch(fetchUserinfosuccess(
          response.data.data[80].id,
          // eslint-disable-next-line no-underscore-dangle
          response.data.data[80].account._id,
          response.data.data[80].available_balance,
          response.data.data[80].account.customer.name
        ));
      })
      .catch((error) => {
        dispatch(fetchUserinfofail(error));
        console.log('error', error);
      });
  };
};
// eslint-disable-next-line no-trailing-spaces
export const fetchCreditsuccess = (credit, debit) => ({
  type: actionType.FETCH_CREDICT_SUCCESS,
  totalcd: credit,
  totaldb: debit
});
export const fetchCreditfail = error => ({
  type: actionType.FETCH_CREDICT_FAIL,
  error
});
export const fetchCreditstart = () => ({
  type: actionType.FETCH_CREDICT_START
});
// eslint-disable-next-line arrow-body-style
export const fetchCredit = (acct) => {
  return (dispatch) => {
    dispatch(fetchCreditstart());
    const data = {
      account: acct
    };
    console.log('[date]', data);
    axios.post('/api/v1/debit_credit', data)
      .then((response) => {
        console.log('res', response.data.data.credit, response.data.data.debit);
        dispatch(fetchCreditsuccess(
          response.data.data.credit,
          response.data.data.debit
        ));
      })
      .catch((error) => {
        dispatch(fetchUserinfofail(error));
        console.log('error', error);
      });
  };
};
