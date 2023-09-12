/* eslint-disable no-unused-vars */
import React from 'react';
import {
  airportDirection, airportimg1, airportimg2, airportimg3,
} from '../Images/index';

import DirectionCard from './Component';
import './AirportDirection.scss';

const list = [
  {
    count: 1,
    title: 'Walk to baggage claim',
    img: airportimg1,
  },
  {
    count: 2,
    title: 'Once your bags come , start walking to arrival hall',
    img: airportimg2,
  },
  {
    count: 3,
    title: 'Reach at arrival hall',
    img: airportimg3,
  },
];

const AirportDirection = () => (
    <>
      <div className="headline-header">
        <div className="direction-img title">Pickup point is at pillar 6 next to parking area.</div>
        <div className="direction-img img-title">
          <img src={airportDirection} alt="direction" />
        </div>
      </div>
      <div className="airport-direction">
        {list && list?.length
          ? list?.map((element) => (
            <div className="airport-direction-card" key={element?.count}>
              <DirectionCard
                count={element.count}
                title={element?.title}
                img={element?.img}
              />
            </div>
          )) : null}
      </div>
      </>
  );

export default AirportDirection;
