// components/LinkedinDeviceUsageCard.jsx
import React from 'react';
import Desktop from '../../assets/icons/Desktop';
import TrendDown from '../../assets/icons/TrendDown';
import Phone from '../../assets/icons/Phone';
import TrendUp from '../../assets/icons/TrendUp';

const DeviceUsageCard = ({ deviceUsage }) => {
  return (
    <div className="submain__box-card enheter">
      <h6 className="submain__box-title">Enheter</h6>
      <div id="enheter" className="enheter__container">
        <div id="dator" className="dator">
          <h2 className="submain__box-content"><Desktop/>{deviceUsage.desktop} <TrendDown/></h2>
        </div>
        <div id="mobil" className="mobil">
          <h2 className="submain__box-content"><Phone/>{deviceUsage.mobile} <TrendUp/></h2>
        </div>
      </div>
      <p className="submain__box-text">Fördelning mellan olika enheter för dina följare.</p>
    </div>
  );
};

export default DeviceUsageCard;
