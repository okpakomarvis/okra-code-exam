/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import * as actionType from './actionType';

export const fetchUserinfosuccess = (user, occpt, totalb, totalc, totald) => ({
  type: actionType.FETCH_USERINFO_SUCCESS,
  username: user,
  occupation: occpt,
  totalBalance: totalb,
  totalCredit: totalc,
  totalDebit: totald
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
        dispatch(fetchUserinfosuccess(
          response.data.data[0].username,
          response.data.data[0].occupation,
          response.data.data[0].totalBalance,
          response.data.data[0].totalCredit,
          response.data.data[0].totalDebit
        ));
      })
      .catch((error) => {
        dispatch(fetchUserinfofail(error));
        console.log('error', error);
      });
  };
};
