// components/LinkedinGrowthCard.jsx
import React from 'react';
import TrendDown from '../../assets/icons/TrendDown';

const GrowthCard = ({ growthPercentage }) => {
  return (
    <div className="submain__box-card okning-foljare">
      <h6 className="submain__box-title">Ökning av följare</h6>
      <h2 id="okning-foljare" className="submain__box-content center-text">{growthPercentage || 'Data saknas'} <TrendDown/></h2>
      <h6 className="submain__box-subheader">Ökar ditt antal följare?</h6>
      <p className="submain__box-text">Jämfört med föregående 14 dagar.</p>
    </div>
  );
};

export default GrowthCard;
