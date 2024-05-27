import React from 'react';

const SummaryCard = ({ summary }) => {
  // Anta att `summary` kan vara ett objekt med nycklarna `clicks` och `views`.
  // Värdena visas direkt utan etiketter.
  const clicks = summary?.clicks || 'Data saknas';
  const views = summary?.views || 'Data saknas';

  return (
    <div className="main__box-card sammanfattning">
      <h6 className="main__box-title">Summering</h6>
      <div className="main__box-content center-text" id="total-sammanfattning">
        <h4 id="total-sammanfattning">{clicks}</h4>
        <h4 id="total-sammanfattning">{views}</h4>
      </div>
      <p className="main__box-text">Statistiken gäller föregående 14 dagar.</p>
    </div>
  );
};

export default SummaryCard;
