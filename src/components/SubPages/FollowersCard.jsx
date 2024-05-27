// components/SubPages/FollowersCard.jsx
import React from 'react';
import TrendUp from '../../assets/icons/TrendUp';

const FollowersCard = ({ totalFollowers }) => {
   
    return (
      <div className="submain__box-card antal-foljare">
        <h6 className="submain__box-title">Antal följare</h6>
        <div className="submain__box-content center-text">
          <h2 id="antal-foljare">{totalFollowers } <TrendUp/></h2>
        </div>
        <h6 className="submain__box-subheader">Totala antalet följare</h6>
        <p className="submain__box-text">Jämfört med föregående 14 dagar.</p>
      </div>
    );
  };
  

export default FollowersCard;
