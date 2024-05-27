import React from 'react';
import Map from '../assets/images/map.png'

const GeographyCard = ({ geography }) => {
  
  const geographyData = geography ? Object.entries(geography).map(([key, value]) =>
    <h3 key={key}>{value}</h3> 
  ) : <h3>Data saknas</h3>;

  return (
    <div className="main__box-card sammanfattning-geo">
      <h6 className="main__box-title">Geografi</h6>
      <div className="main__box-content" id="geo">
        {geographyData}
      </div>
      <img src={Map} className="map" alt="map"/>
      <p className="main__box-text">Länder som dina följare kommer ifrån.</p>
    </div>
  );
};

export default GeographyCard;
