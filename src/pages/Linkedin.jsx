import React, { useEffect, useState } from 'react';
import '../styles/style.scss';
import Sidebar from '../Sidebar';
import FollowersCard from '../components/SubPages/FollowersCard';
import NewFollowersCard from '../components/SubPages/NewFollowersCard';
import GrowthCard from '../components/SubPages/GrowthCard';
import DeviceUsageCard from '../components/SubPages/DeviceUsageCard';
import BestPostCard from '../components/SubPages/BestPostCard';
import GeographyCard from '../components/SubPages/GeographyCard';
import ClicksCard from '../components/SubPages/ClicksCard';

const Linkedin = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/overview')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  return (
    <section className="container">
      <Sidebar />
      <main className="submain">
        <div className="submain__inner">
          <h1 className="submain__title">LinkedIn</h1>
          <div className="submain__box-container">
            <div className="submain__box-rows">
              <FollowersCard totalFollowers={data?.linkedin.totalFollowers || 'Data saknas'} />
              <NewFollowersCard newFollowers={data?.linkedin.newFollowers || 'Data saknas'} />
              <GrowthCard growthPercentage={data?.linkedin.growthPercentage || 'Data saknas'} />
              <DeviceUsageCard deviceUsage={data?.linkedin.deviceUsage || { desktop: 'Data saknas', mobile: 'Data saknas' }} />
              <BestPostCard bestPost={data?.linkedin.clicks ? data?.linkedin.clicks.bestPost : { Klick: 'Data saknas', Visningar: 'Data saknas' }} />
              <GeographyCard geography={data?.linkedin.geography || 'Data saknas'} />
              <ClicksCard clicks={data?.linkedin.clicks ? data?.linkedin.clicks.allClicks : { totalClicks: 'Data saknas', changeLastMonth: 'Data saknas' }} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Linkedin;
