// components/LinkedinBestPostCard.jsx
import React from 'react';

const BestPostCard = ({ bestPost }) => {
  return (
    <div className="submain__box-card basta-inlagg">
      <h6 className="submain__box-title">Bästa inlägg</h6>
      <h4 id="basta-inlagg" className="submain__box-content">{bestPost.Klick || 'Ingen data'}</h4>
      <h4 id="basta-inlagg" className="submain__box-content">{bestPost.Visningar || 'Ingen data'}</h4>
      <p className="submain__box-text">Statistik för ditt bäst presterande inlägg.</p>
    </div>
  );
};

export default BestPostCard;
