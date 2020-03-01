/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolBar from './toolbar/toolbar';
import TopBar from './Topbar/topbar';
import Transaction from './Transaction/transaction';
import { fetchUserinfo, fetchCredit } from './store/actions/index';
import format from './utility/format';
import Unity from './unity.png';
import './app.css';

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.fetchuserinfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.acct !== prevProps.acct) {
      this.props.postAccount(this.props.acct);
    }
  }

  render() {
    /* const { username } = this.state; */
    // eslint-disable-next-line react/destructuring-assignment
    console.log('hello');
    // console.log('user', this.props.userinfo[0].username);
    return (
      <div className="Bg">
        <div className="TopBg">
          <TopBar />
          <ToolBar />
          <div className="ContentBanner">
            <div className="Cn_info">
              <p className="Balance">Total Balance</p>
              <div className="Bt_Amount Size_2">{format(+this.props.totalbalance) || ''}</div>
              <div className="UnityLogo">
                <img src={Unity} alt="" />
              </div>
            </div>
            <div className="Cn_action">
              <div className="Cn_row_1">
                <p>Total Credits</p>
                <i className="fas Cn_i fa-share"> </i>
                <div>{format(+this.props.totalcredit) || ''}</div>
              </div>
              <div className="Cn_row_2">
                <p>Total Debits</p>
                <i className="fas Cn_i_1 fa-reply"> </i>
                <div>{format(+this.props.totaldebit) || ''}</div>
              </div>
            </div>
            <div className="Submit_Bt" id="okra-enabled">
              <button className="submit_btn" id="Okra">Connect your bank with Okra</button>
            </div>
          </div>
          {/* {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>} */}
        </div>
        <Transaction />
      </div>
    );
  }
}

// eslint-disable-next-line arrow-parens
const mapStateToProps = state =>{
  return {
    username: state.user,
    totalbalance: state.totalb,
    acct: state.account,
    totalcredit: state.totalc,
    totaldebit: state.totald,
    loadingr: state.loading
  };
};
const mapToStateDispatch = dispatch =>{
  return {
    fetchuserinfo: () => dispatch(fetchUserinfo()),
    postAccount: (account) => dispatch(fetchCredit(account))
  };
};
export default connect(mapStateToProps, mapToStateDispatch)(App);
