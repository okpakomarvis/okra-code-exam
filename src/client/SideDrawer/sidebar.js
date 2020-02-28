/* eslint-disable react/prop-types */
import React from 'react';
/* import Navigation from '../navigationitems/navigation'; */
import Backdrop from '../Backdrop/backdrop';
import Icon from '../icons/avatar.png';
import Dashbaord from '../icons/dashboard.svg';
import Transfer from '../icons/transfer.svg';
import Settings from '../icons/gear.svg';
import Logout from '../icons/arrow.svg';


const sideDrawer = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    open, closed, user, occpt
  } = props;
  let attachedClasses = ['SideDrawer', 'Close'];
  // eslint-disable-next-line react/destructuring-assignment
  if (open) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  return (
    <React.Fragment>
      <Backdrop show={open} clicked={closed} />
      <div
        className={attachedClasses.join(' ')}
        onClick={closed}
        onKeyDown={closed}
        role="button"
        tabIndex="0"
      >
        <div className="nav_bd">
          <div className="nav_info">
            <div className="flex_1">
              <img src={Icon} alt="avatar" />
            </div>
            <div className="flex_2">
              <p>{user || ''}</p>
              <div>{occpt || ''}</div>
            </div>
            <div className="flex_3">
              <i className="far Cn_c_i fa-times"> </i>
            </div>
          </div>
          <div className="top_nav">
            <div className="flex">
              <img src={Dashbaord} alt="avatar" />
              <p>Dashbaord</p>
            </div>
            <div className="flex">
              <img src={Transfer} alt="avatar" />
              <p>Transfers</p>
            </div>
            <div className="flex">
              <div><i className="fas Cn_i_b fa-share"> </i></div>
              <p>Credits</p>
            </div>
            <div className="flex">
              <div><i className="fas Cn_i_b fa-reply"> </i></div>
              <p>Debits</p>
            </div>
          </div>
          <div className="nav_arrow"> </div>
          <div className="bottom_nav">
            <div className="flex">
              <img src={Settings} alt="avatar" />
              <p>Settings</p>
            </div>
            <div className="flex">
              <img src={Logout} alt="avatar" />
              <p>Sign Out</p>
            </div>
          </div>
        </div>
        {/* <nav>
                    <Navigation isAuthenticated={props.isAuth}/>
                </nav> */}
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
