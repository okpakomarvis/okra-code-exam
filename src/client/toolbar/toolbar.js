/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideDrawer from '../SideDrawer/sidebar';
import LogoImage from '../pear-clipart-svg.png';

class ToolBar extends Component {
    state ={
      show: false
    };

    closeSideDrawerHandler = () => {
      this.setState({
        show: false
      });
    };

    toggleHandler = () => {
      this.setState(prevS => ({ show: !prevS.show }));
    }

    render() {
      return (
        <div className="TopLogo">
          <button className="Hambuger" onClick={this.toggleHandler}>
            <i className="fas Size Cn_op fa-align-left"> </i>
          </button>
          <div className="Logo">
            <img src={LogoImage} alt="logo" />
          </div>
          <SideDrawer
            // eslint-disable-next-line react/destructuring-assignment
            open={this.state.show}
            closed={this.closeSideDrawerHandler}
            user={this.props.username}
            occpt={this.props.occupation}
          />
        </div>


      );
    }
}
const mapStateToProps = state => ({
  username: state.user,
  occupation: state.occpt
});

export default connect(mapStateToProps)(ToolBar);
