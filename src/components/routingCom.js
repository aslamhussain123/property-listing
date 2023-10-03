import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import { Listings, getListingDetails } from '../services/mockApi';
import DataTable from '../components/dataTable'
import CardView from "../components/cardView";
import DetailsPage from '../pages/detailsPage'

const RoutingCom = () => {
  const [view, setView] = useState("table");
  const [selectedListing, setSelectedListing] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation()
  useEffect(() => {
    console.log("Selected ID:", selectedListing);
    if (selectedListing) {
      navigate('/details'); 
    }
  }, [selectedListing, navigate]);

  return (
    <div className="container">
       {location.pathname !== "/details" && ( 
        <>
          <button 
            className={`view-toggle-button ${view === 'table' ? 'active' : ''}`} 
            onClick={() => setView('table')}>
            Table View
          </button>
          <button 
            className={`view-toggle-button ${view === 'card' ? 'active' : ''}`} 
            onClick={() => setView('card')}>
            Card View
          </button>
        </>
      )}
      <Routes>
        <Route path="/" element={
          <>
            {view === 'table' && <DataTable data={Listings} onListingSelect={setSelectedListing} />}
            {view === 'card' && <CardView data={Listings} onListingSelect={setSelectedListing} />}
          </>
        } />
       <Route path="/details" element={ 
    selectedListing ? <DetailsPage listing={getListingDetails(selectedListing)} /> : null 
}  />
      </Routes>
    </div>
  );
};

export default RoutingCom;
