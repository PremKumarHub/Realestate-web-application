import React from 'react';
import './Latest.css';

const Latest = () => {
  const properties = [
    {
      id: 1,
      title: 'Modern Family House',
      location: 'Chennai, TN',
      price: '₹45 Lakhs',
      image: '/templates/house1.jpg',
    },
    {
      id: 2,
      title: 'Luxury Villa',
      location: 'Coimbatore, TN',
      price: '₹1.2 Crores',
      image: '/templates/house2.jpg',
    },
    {
      id: 3,
      title: 'Budget Apartment',
      location: 'Madurai, TN',
      price: '₹30 Lakhs',
      image: '/templates/house3.jpg',
    },
    {
        id:4,
        title: 'Luxury Apartment',
        location: 'Chennai, TN',
        price: '₹80 Lakhs',
        image: '/templates/house4.jpg'
    },
    {
        id:5,
        title: 'Luxury Villa',
        location: 'Chennai, TN',
        price:'1 crores',
        image: '/templates/house5.jpg',
    },
    {
        id:6,
        title: 'Luxury Apartment',
        location: 'Chennai, TN',
        price: '₹1.2 Crores',
        image:'/templates/house6.jpg',
    }
  ];

  return (
    <section className="latest-properties-section" id="latest">
      <h2>🏡 Latest Properties</h2>
      <div className="property-card-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p className="price">{property.price}</p>
              <button className="view-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
