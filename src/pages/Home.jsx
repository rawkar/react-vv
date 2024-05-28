import React, { useEffect, useState } from 'react';
import '../styles/style.scss';
import Sidebar from '../Sidebar';
import LinkedinCard from '../components/LinkedinCard';
import InstagramCard from '../components/InstagramCard';
import FacebookCard from '../components/FacebookCard';
import SummaryCard from '../components/SummaryCard';
import DeviceSummary from '../components/DeviceSummary';
import TrendsCard from '../components/TrendsCard';
import GeographyCard from '../components/GeographyCard';

const Home = () => {
    // State-variabel för att hantera datan 
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hämtar datan
    fetch('http://localhost:3000/overview/')
    //Konverterar svaret från JSON-format
      .then(response => response.json())
       // Uppdaterar state-variabeln med hämtad data
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data: ', error);  // Loggar om något går fel med anropet
      });
  }, []); // Körs endast vid första renderingen


    // Returnera JSX för Home-komponenten
  return (
    <section className="container">
      <Sidebar />
      <main className="main">
        <div className="main__inner">
          <h1 className="main__title">Översikt</h1>
          <div className="main__box-container">
            <div className="main__box-rows">
              {/* Kort som representerar olika delar av datahämtning */}
              <LinkedinCard growthPercentage={data?.summary.platforms.linkedin.growthPercentage || 'Data saknas'} />
              <InstagramCard growthPercentage={data?.summary.platforms.instagram.growthPercentage || 'Data saknas'} />
              <FacebookCard growthPercentage={data?.summary.platforms.facebook.growthPercentage || 'Data saknas'} />
              <SummaryCard summary={data?.summary.sammanfattning || 'Data saknas'} />
              <DeviceSummary desktop={data?.summary.deviceUsage.desktop || 'Data saknas'} mobile={data?.summary.deviceUsage.mobile || 'Data saknas'} />
              <TrendsCard trends={data?.summary.trend || 'Data saknas'} />
              <GeographyCard geography={data?.summary.geography || 'Data saknas'} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
