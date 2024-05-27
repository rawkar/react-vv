import React from 'react'
import TrendUp from '../assets/icons/TrendUp'

function FacebookCard({growthPercentage}) {
  return (
    <div className="main__box-card facebook">
    <h6 className="main__box-title">Facebook</h6>
    <h2 className="main__box-content center-text" id="total-facebook">{growthPercentage}   <TrendUp/></h2>
 
    <h6 className="main__box-subheader">Engagemangsgrad för Facebook</h6>
    <p className="main__box-text">Jämfört med föregående 14 dagar.</p>
  </div>
  )
}

export default FacebookCard