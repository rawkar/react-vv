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

const Facebook = () => {
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
          <h1 className="submain__title">Facebook</h1>
          <div className="submain__box-container">
            <div className="submain__box-rows">
              <FollowersCard totalFollowers={data?.facebook.totalFollowers || 'Data saknas'} />
              <NewFollowersCard newFollowers={data?.facebook.newFollowers || 'Data saknas'} />
              <GrowthCard growthPercentage={data?.facebook.growthPercentage || 'Data saknas'} />
              <DeviceUsageCard deviceUsage={data?.facebook.deviceUsage || { desktop: 'Data saknas', mobile: 'Data saknas' }} />
              <BestPostCard bestPost={data?.facebook.clicks ? data?.facebook.clicks.bestPost : { Klick: 'Data saknas', Visningar: 'Data saknas' }} />
              <GeographyCard geography={data?.facebook.geography || 'Data saknas'} />
              <ClicksCard clicks={data?.facebook.clicks ? data?.facebook.clicks.allClicks : { totalClicks: 'Data saknas', changeLastMonth: 'Data saknas' }} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Facebook;
