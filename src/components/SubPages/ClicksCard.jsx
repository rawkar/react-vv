// components/LinkedinClicksCard.jsx
import React from 'react';

const ClicksCard = ({ clicks }) => {
  return (
    <div className="submain__box-card klick-inlagg">
      <h6 className="submain__box-title">Klick på inlägg</h6>
      <h4 id="klick-inlagg" className="submain__box-content">{clicks.totalClicks || 'Data saknas'}</h4>
      <h4 id="klick-inlagg" className="submain__box-content">{clicks.changeLastMonth || 'Data saknas'}</h4>
      <p className="submain__box-text">Jämfört med föregående 14 dagar. </p>
    </div>
  );
};

export default ClicksCard;
