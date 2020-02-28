import * as actionType from '../actions/actionType';

const initializeState = {
  user: '',
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
      console.log('data', action.data);
      return {
        ...state,
        user: action.username,
        occpt: action.occupation,
        totalb: action.totalBalance,
        totalc: action.totalCredit,
        totald: action.totalDebit,
        loading: false
      };
    case actionType.FETCH_USERINFO_FAIL:
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
