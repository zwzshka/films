import React from 'react';

export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image">
        <img
          src={poster !== 'N/A' ? poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={title}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year} | {type}</p>
      </div>
    </div>
  );
}