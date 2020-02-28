import React from 'react';

const topBar = () => (
  <div className="TopHeading">
    <p className="ContentTime">9:41</p>
    <ul className="ContentRight">
      <li className="ContentCellular">
        <i className="fas fa-signal"> </i>
      </li>
      <li className="ContentWiffi">
        <i className="fas fa-wifi"> </i>
      </li>
      <li className="ContentBattery">
        <i className="fas fa-battery-full"> </i>
      </li>
    </ul>
  </div>

);

export default topBar;
