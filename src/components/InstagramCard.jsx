import React from 'react'
import TrendUp from '../assets/icons/TrendUp'

function InstagramCard({ growthPercentage }) {
  return (
    <div className="main__box-card instagram">
                <h6 className="main__box-title">Instagram</h6>
                <h2 className="main__box-content center-text" id="total-instagram">{growthPercentage} <TrendUp/></h2>
               
                <h6 className="main__box-subheader">Engagemangsgrad för Instagram</h6>
                <p className="main__box-text">Jämfört med föregående 14 dagar.</p>
              </div>
  )
}

export default InstagramCard