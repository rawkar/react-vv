// components/LinkedinNewFollowersCard.jsx
import React from 'react';
import TrendUp from '../../assets/icons/TrendUp';

const NewFollowersCard = ({ newFollowers }) => {
  return (
    <div className="submain__box-card nya-foljare">
      <h6 className="submain__box-title">Nya följare</h6>
      <h2 id="nya-foljare" className="submain__box-content center-text">{newFollowers || 'Data saknas'} <TrendUp/></h2>
      <h6 className="submain__box-subheader">Antal nya följare</h6>
      <p className="submain__box-text">Jämfört med föregående 14 dagar.</p>
    </div>
  );
};

export default NewFollowersCard;
