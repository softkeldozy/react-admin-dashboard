import React from 'react';
import './FeaturedInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$200,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$20,985</span>
          <span className="featuredMoneyRate">
            +111.4 <ArrowUpwardIcon className='featuredIcon negative' />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$25,415</span>
          <span className="featuredMoneyRate">
            +1.4 <ArrowDownwardIcon className='featuredIcon' />
          </span>
        </div>
        <span className="featuredSub">Compared to last month </span>
      </div>
    </div>
  )
}

export default FeaturedInfo