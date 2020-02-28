import React from 'react';

const backdrop = (props) => {
  // eslint-disable-next-line react/prop-types
  const { show, clicked } = props;
  return show ? <div className="Backdrop" onClick={clicked} role="button" onKeyDown={clicked} tabIndex="0"> </div> : null;
};


export default backdrop;
