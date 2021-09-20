import React from 'react';
import './Countdown.css';

export default function Countdown({ colour = 'dark' }) {
  return (
    <div className={`countdown ${colour === 'light' && 'light'}`}>
      <h3 className='countdown-title'>
        Coming <span>4 nov 2020</span>
      </h3>
      <div className='countdown-cards'>
        <div className='countdown-card'>
          <strong className='countdown-time'>47</strong>
          <p className='body-s countdown-lead'>days</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>07</strong>
          <p className='body-s countdown-lead'>hours</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>56</strong>
          <p className='body-s countdown-lead'>min</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>14</strong>
          <p className='body-s countdown-lead'>sec</p>
        </div>
      </div>
    </div>
  );
}
