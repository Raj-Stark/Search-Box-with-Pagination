import React from 'react';
const Beer = ({ image_url, name, tagline }) => {
  return (
    <div className="beer">
      <div className="beer-img">
        <img src={image_url} />
      </div>

      <div className="beer-info">
        <h2>{name}</h2>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default Beer;
