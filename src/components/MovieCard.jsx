import React from 'react';

import './MovieCard.css';

const IMG = "https://www.mountaineers.org/images/placeholder-images/placeholder-400-x-400/image_preview";

const MovieCard = ({ movie: { Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : IMG} alt={Title} />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
    
  )
}

export default MovieCard;