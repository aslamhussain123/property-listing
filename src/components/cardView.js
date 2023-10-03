// CardView.js
import React from 'react';

const CardView = ({ data, onListingSelect }) => {

  const handleClick = (id) =>{
    onListingSelect(id)
  }
  return (
    <div className="card-container">
      {data.map(listing => (
        <div className="card" key={listing.id} onClick={() => handleClick(listing.id)}>
          <img src={listing.imageUrl} alt={listing.title} />
          <h3>{listing.title}</h3>
          <p>{listing.address}</p>
        </div>
      ))}
    </div>
  );
};

export default CardView;
