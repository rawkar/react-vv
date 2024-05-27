// LinkedinCard.js
import React from 'react';
import TrendUp from '../assets/icons/TrendUp';

const LinkedinCard = ({ growthPercentage }) => {
  return (
    <div className="main__box-card linkedin">
      <h6 className="main__box-title">Linkedin</h6>
      <h2 className="main__box-content center-text" id="total-linkedin">{growthPercentage}    <TrendUp/></h2>
   

      <h6 className="main__box-subheader">Engagemangsgrad för Linkedin</h6>
      <p className="main__box-text">Jämfört med föregående 14 dagar.</p>
    </div>
  );
};

export default LinkedinCard;
