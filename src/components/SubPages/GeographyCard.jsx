// components/LinkedinGeographyCard.jsx
import React from 'react';
import Map from '../../assets/images/map.png'

const GeographyCard = ({ geography }) => {
  return (
    <div className="submain__box-card geo">
      <h6 className="submain__box-title">Geografi</h6>
      <div id="geo" className="submain__box-content">
        {Object.entries(geography).map(([country, detail], index) => (
          <h5 key={index}>{detail}</h5>
        ))}
    
      </div>
      <img src={Map} className="map" alt="map"/>
      <p className="submain__box-text">Länder som dina följare kommer ifrån.</p>
    </div>
  );
};

export default GeographyCard;
