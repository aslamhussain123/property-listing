import React from "react";
const DetailsPage = ({ listing, setSelectedListing }) => {

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={listing.imageUrl} alt={listing.title} />
      </div>
      <div className="details-content">
        <h2>{listing.title}</h2>
        <p><strong>Address:</strong> {listing.address}</p>
        <p><strong>Beds:</strong> {listing.beds}</p>
        <p><strong>Baths:</strong> {listing.bath}</p>
        <p><strong>Area:</strong> {listing.AreaSQFT} sqft</p>
        <p><strong>Property Type:</strong> {listing.propertyType}</p>
        <p><strong>Commercial:</strong> {listing.isCommercial ? 'Yes' : 'No'}</p>
        <p><strong>Price:</strong> ${listing.price.toLocaleString()}</p>
      </div>
    </div>
  );
};


export default DetailsPage;
