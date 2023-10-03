export const Listings = [
  {
    id: 1,
    imageUrl: "https://placehold.co/400",
    title: 'Flate for Rent',
    address: 'G-13 Islamabad',
    beds: 8,
    bath: 5,
    AreaSQFT: 1234,
    propertyType: 'house',
    isCommercial: false,
    price: 5444322
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: false,
    price: 8000000
  },
  {
    id: 3,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for sale',
    address: 'DHA Phase 6, Lahore',
    beds: 5,
    bath: 6,
    AreaSQFT: 333,
    propertyType: 'house',
    isCommercial: true,
    price: 65000000
  },
  {
    id: 4,
    imageUrl: "https://placehold.co/400",
    title: 'Flate for Rent',
    address: 'G-13 Islamabad',
    beds: 8,
    bath: 5,
    AreaSQFT: 1234,
    propertyType: 'house',
    isCommercial: false,
    price: 5444322
  },
  {
    id: 5,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: false,
    price: 8000000
  },
  {
    id: 6,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for sale',
    address: 'DHA Phase 6, Lahore',
    beds: 5,
    bath: 6,
    AreaSQFT: 333,
    propertyType: 'house',
    isCommercial: false,
    price: 65000000
  },
  {
    id: 7,
    imageUrl: "https://placehold.co/400",
    title: 'Flate for Rent',
    address: 'G-13 Islamabad',
    beds: 8,
    bath: 5,
    AreaSQFT: 1234,
    propertyType: 'house',
    isCommercial: false,
    price: 5444322
  },
  {
    id: 8,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: true,
    price: 8000000
  },
  {
    id: 9,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: false,
    price: 8000000
  },
  {
    id: 10,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: true,
    price: 8000000
  },
  {
    id: 11,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: false,
    price: 8000000
  },
  {
    id: 12,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: false,
    price: 8000000
  },
  {
    id: 13,
    imageUrl: "https://placehold.co/400",
    title: '1 Kanal House for rent',
    address: 'Blue area, Islamabad',
    beds: 4,
    bath: 4,
    AreaSQFT: 2250,
    propertyType: 'house',
    isCommercial: true,
    price: 8000000
  },
];


export const getListingDetails = (id) => {
  return Listings.find(listing => listing.id === id);  
};
