/* eslint-disable no-unused-vars */
import React from 'react';
import './airportDirectionComponent.scss';

const DirectionCard = ({
  count, title, img,
}) => (
  <div className="direction-card">
    <div className="title-header">
      <div className="count">
        {count}
        .
      </div>
      <div className="title">{title}</div>
    </div>
    <div className="image-header">
      <img src={img} alt="airport-img" />
    </div>
  </div>
);

export default DirectionCard;
