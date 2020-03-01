import * as actionType from '../actions/actionType';

const initializeState = {
  user_id: '',
  user: '',
  account: '',
  occpt: '',
  totalb: '',
  totalc: '',
  totald: '',
  error: null,
  loading: false,

};

const reducer = (state = initializeState, action) => {
  switch (action.type) {
    case actionType.FETCH_USERINFO_START:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_USERINFO_SUCCESS:
      return {
        ...state,
        user_id: action.userid,
        account: action.acct,
        totalb: action.totalBalance,
        user: action.username,
        loading: false
      };
    case actionType.FETCH_USERINFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionType.FETCH_CREDICT_START:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_CREDICT_SUCCESS:
      return {
        ...state,
        totalc: action.totalcd,
        totald: action.totaldb,
        loading: false
      };
    case actionType.FETCH_CREDICT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
console.log('init', initializeState);
export default reducer;
