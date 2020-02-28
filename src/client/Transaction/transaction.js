import React from 'react';

const tranction = () => (
  <div className="Content_bg">
    <div className="Transact"> Transactions History</div>
    <div className="Content_t">
      <div className="cont_1">
        <p>Bank Transfer</p>
        <div>
          02 Jul 19
          <span>04:02 AM</span>
        </div>
      </div>
      <div className="cont_2">
        <p><span className="Cn_i">5,120.87</span></p>
        <i className="fas Cn_i Cn_mt fa-share"> </i>
        <div>Credit</div>
      </div>
    </div>
    <div className="Content_t">
      <div className="cont_1">
        <p>Airtime Subscription</p>
        <div>
          21 Jun 19
          <span>17:00 PM</span>
        </div>
      </div>
      <div className="cont_2">
        <p><span className="Cn_i_1">3,111.12</span></p>
        <i className="fas Cn_i_1 Cn_mt fa-reply"> </i>
        <div>Debit</div>
      </div>
    </div>
    <div className="Content_t">
      <div className="cont_1">
        <p>Ikeja Electric</p>
        <div>
          12 Jun 19
          <span>21: 32 PM</span>
        </div>
      </div>
      <div className="cont_2">
        <p><span className="Cn_i_1">10,500.00</span></p>
        <i className="fas Cn_i_1 Cn_mt fa-reply"> </i>
        <div>Debit</div>
      </div>
    </div>
  </div>

);

export default tranction;
