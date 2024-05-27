import React from 'react';
import Desktop from '../assets/icons/Desktop';
import TrendUp from '../assets/icons/TrendUp';
import TrendDown from '../assets/icons/TrendDown';
import Phone from '../assets/icons/Phone';


const DeviceSummary = ({ desktop, mobile }) => {
  return (
    <div className="main__box-card sammanfattning-enheter">
      <h6 className="main__box-title">Enheter</h6>
      <div id="enheter" className="enheter__container">
        <div id="dator" className="sammanfattning-dator">
          <  Desktop/>
          <h2 className="main__box-content">{desktop}</h2>
          <TrendDown/>
        </div>
        <div id="mobil" className="sammanfattning-mobil">
          <Phone/>
          <h2 className="main__box-content">{mobile}</h2>
          <TrendUp/>
        </div>
      </div>
      <p className="main__box-text">Fördelning mellan olika enheter för dina följare.</p>
    </div>
  );
};

export default DeviceSummary;
