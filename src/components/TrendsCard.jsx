import React from 'react';
import TrendUp from '../assets/icons/TrendUp';

const TrendsCard = ({ trends }) => {
  // Antag att `trends` är ett objekt med nycklarna `clicksPercentage` och `viewsPercentage`
  const clicks = trends?.clicksPercentage || 'Data saknas';
  const views = trends?.viewsPercentage || 'Data saknas';

  return (
    <div className="main__box-card sammanfattning-trender">
      <h6 className="main__box-title">Trender</h6>
      <div className="main__box-content center-text" id="sammanfattning-trender">
        <h4 id="sammanfattning-trender">{clicks} <TrendUp/></h4>
      
        <h4 id="sammanfattning-trender" >{views} <TrendUp/></h4>
      </div>
      <p className="main__box-text">Statistiken gäller föregående 14 dagar.</p>
    </div>
  );
};

export default TrendsCard;
