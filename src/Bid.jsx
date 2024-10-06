import React, { useState } from 'react';
import { FiSearch, FiBell, FiMenu, FiCalendar, FiDollarSign, FiTruck, FiBarChart2, FiRepeat, FiSettings, FiHelpCircle, FiMapPin, FiBookmark } from 'react-icons/fi';
import './Bid.css';
import Sidebar from './Sidebar';
// import Audi1 from "./assets/images/Audi1.jpg";
// import Ducati1 from './assets/images/speed_triple.jpg';
// import Z1000 from './assets/images/z1000.jpg';
// import Supra1 from './assets/images/supra.jpg';
// import F40 from './assets/images/f40.jpg';
// import F8 from './assets/images/ferrari_f8.jpg';
// import H2 from './assets/images/H2.jpg';
// import jeep1 from './assets/images/jeep1.jpg';
// import user from './assets/images/user_avatar.jpg';

import Audi1 from "./assets/images/Audi1.jpg";
import Ducati1 from './assets/images/speed_triple.jpg';
import Z1000 from './assets/images/z1000.jpg';
import Supra1 from './assets/images/supra.jpg';
import F40 from './assets/images/f40.jpg';
import F8 from './assets/images/ferrari_f8.jpg';
import H2 from './assets/images/H2.jpg';
import jeep1 from './assets/images/jeep1.jpg';
import user from './assets/images/user_avatar.jpg';
import Lamborghini from './assets/images/Lambo1.jpg';
import Bentley1 from './assets/images/bentley1.jpg';
import Rx7 from './assets/images/rx7.jpg';
import Triumph from './assets/images/Triumph.jpg';
import Range_Rover from './assets/images/range_rover1.jpg';


const AuctionCard = ({ car }) => (
  <div className="auction-card">
    <img src={car.image} alt={car.name} />
    <div className="car-info">
      <div className="car-header">
        <h3>{car.name}</h3>
        <FiBookmark className="bookmark-icon" />
      </div>
      <div className="car-location">
        <FiMapPin /> {car.location}
      </div>
      <div className="car-details">
        <span>Style: {car.style}</span>
        <span>RTO: {car.rto}</span>
        <span>Spend: {car.spend}</span>
      </div>
      <div className="car-prices">
        <span className="current-price">${car.currentPrice.toLocaleString()}</span>
        <span className="bid-price">$ {car.bidPrice.toLocaleString()}</span>
      </div>
      <button className="bid-button">Bid Now</button>
    </div>
  </div>
);

const ActiveBids = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const cars = [
    { name: "Audi R8 Green", location: "Munich, Germany", style: 'Audi', rto: 'DE01', spend: '12.5km/l', currentPrice: 285892, bidPrice: 260000, image: Audi1 },
    { name: "Ducati Speed Triple", location: "Bologna, Italy", style: 'Ducati', rto: 'IT02', spend: '20.1km/l', currentPrice: 140328, bidPrice: 125000, image: Ducati1 },
    { name: "Kawasaki Z1000", location: "Tokyo, Japan", style: 'Kawasaki', rto: 'JP03', spend: '18.7km/l', currentPrice: 140280, bidPrice: 128000, image: Z1000 },
    { name: "Toyota Supra", location: "Nagoya, Japan", style: 'Toyota', rto: 'JP04', spend: '10.2km/l', currentPrice: 281320, bidPrice: 255000, image: Supra1 },
    { name: "Ferrari F40", location: "Maranello, Italy", style: 'Ferrari', rto: 'IT05', spend: '6.1km/l', currentPrice: 170283, bidPrice: 3500000, image: F40 },
    { name: "Ferrari F8", location: "Maranello, Italy", style: 'Ferrari', rto: 'IT06', spend: '7.8km/l', currentPrice: 140158, bidPrice: 2800000, image: F8 },
    { name: "Kawasaki Ninja H2", location: "Akashi, Japan", style: 'Kawasaki', rto: 'JP07', spend: '17.2km/l', currentPrice: 159999, bidPrice: 145000, image: H2 },
    { name: "Jeep Wrangler", location: "Toledo, USA", style: 'Jeep', rto: 'US08', spend: '8.4km/l', currentPrice: 210500, bidPrice: 195000, image: jeep1 },
    { name: "Lamborghini Aventador", location: "Sant'Agata Bolognese, Italy", style: 'Lamborghini', rto: 'IT09', spend: '5.3km/l', currentPrice: 450000, bidPrice: 420000, image: Lamborghini },
    { name: "Bentley Continental GT", location: "Crewe, UK", style: 'Bentley', rto: 'UK10', spend: '9.7km/l', currentPrice: 380000, bidPrice: 350000, image: Bentley1 },
    { name: "Mazda RX-7", location: "Hiroshima, Japan", style: 'Mazda', rto: 'JP11', spend: '11.2km/l', currentPrice: 175000, bidPrice: 160000, image: Rx7 },
    { name: "Triumph Street Triple", location: "Hinckley, UK", style: 'Triumph', rto: 'UK12', spend: '21.5km/l', currentPrice: 135000, bidPrice: 120000, image: Triumph },
    { name: "Range Rover Sport", location: "Solihull, UK", style: 'Land Rover', rto: 'UK13', spend: '7.9km/l', currentPrice: 320000, bidPrice: 295000, image: Range_Rover }
  ];

  return (
    <div className={`active-bids ${theme}`}>
      {/* <Header toggleTheme={toggleTheme} theme={theme} /> */}
      <div className="main-content">
        <Sidebar toggleTheme={toggleTheme} theme={theme} user={{ name: "Smith", avatar: user }} />
        <div className="content-area">
          <div className="bids-header">
            <div>
              <h1>Active Bids</h1>
              <p>Get your latest update for the last 7 days</p>
            </div>
            <button className="filter-btn">Filter by</button>
          </div>
          <div className="auction-section">
            <h2>Auction</h2>
            <div className="auction-grid">
              {cars.map((car, index) => (
                <AuctionCard key={index} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveBids;