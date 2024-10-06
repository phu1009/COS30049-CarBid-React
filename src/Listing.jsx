import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiUpload, FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import './Listing.css';
import user from './assets/images/user_avatar.jpg';
import Mecerdes1 from './assets/images/mercedes1.jpg';
import AvatarImage from './assets/images/user_avatar.jpg';


const CarInformation = ({ car }) => (
  <div className="car-info">
    <div className="car-header">
      <h2>{car.name}</h2>
      <p>{car.edition}</p>
    </div>
    <div className="car-image-container">
      <img src={car.mainImage} alt={car.name} className="main-image" />
      <div className="thumbnail-images">
        {car.images.map((img, index) => (
          <img key={index} src={img} alt={`${car.name} view ${index + 1}`} />
        ))}
      </div>
    </div>
  </div>
);

const CarDetails = ({ car }) => (
  <div className="car-details">
    <h3>{car.model}</h3>
    <p className="price">${car.price.toLocaleString()}</p>
    <h4>Body and chassis</h4>
    <div className="detail-item">
      <span className="detail-label">Class:</span>
      <span className="detail-value">{car.class}</span>
    </div>
    <div className="detail-item">
      <span className="detail-label">Layout:</span>
      <span className="detail-value">{car.layout}</span>
    </div>
    <div className="detail-item">
      <span className="detail-label">Predecessor:</span>
      <span className="detail-value">{car.predecessor}</span>
    </div>
  </div>
);

const DocumentsList = ({ documents }) => (
  <div className="documents-list">
    <h3>Document's Needed</h3>
    <ul>
      {documents.map((doc, index) => (
        <li key={index}>
          <input type="checkbox" id={`doc-${index}`} checked={doc.required} readOnly />
          <label htmlFor={`doc-${index}`}>{doc.name}</label>
        </li>
      ))}
    </ul>
    <button className="upload-btn"><FiUpload /> Upload</button>
  </div>
);

const Listing = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const { tab } = useParams();
  const [activeCar, setActiveCar] = useState({
    name: "Mercedes Car",
    edition: "2023 Edition",
    mainImage: Mecerdes1,
    images: [Mecerdes1, Mecerdes1, Mecerdes1],
    model: "Mercedes Benz C Class",
    price: 178.10,
    class: "Compact executive car D",
    layout: "Front-engine, rear-wheel drive ( 4MATIC )",
    predecessor: "Mercedes Benz 190 E (W201)"
  });

  const documents = [
    { name: "Bill of sale", required: true },
    { name: "Buyer's Guide", required: true },
    { name: "Country of title issuance", required: true },
    { name: "Application of Texas", required: false }
  ];

  return (
    <div className="listing-container">
        <Sidebar toggleTheme={toggleTheme} theme={theme} user={{ name: "Smith", avatar: user }} />
      <main className="listing-content">
        <section className="car-section">
          <div className="section-header">
            <div>
              <h1>Car Information</h1>
              <p>Get your latest update for the last 7 days</p>
            </div>
            <button className="export-btn">Export <FiChevronDown /></button>
          </div>
          <div className="car-content">
            <div className="car-info-container">
              <div className="car-details-container">
                <CarInformation car={activeCar} />
                <CarDetails car={activeCar} />
              </div>
            </div>
            <DocumentsList documents={documents} />
          </div>
          <button className="buy-now-btn">BUY NOW</button>
        </section>
      </main>
    </div>
  );
};

export default Listing;