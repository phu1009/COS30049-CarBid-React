import React, { useState, useEffect } from 'react';
import { FiSearch, FiBookmark, FiMapPin, FiClock } from 'react-icons/fi';
import './Dashboard.css';
import Sidebar from './Sidebar';
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

const FilterDropdown = ({ label, options, value, onChange }) => (
  <div className="filter-dropdown">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const CarCard = ({ car, onSelect }) => (
  <div className="car-card" onClick={() => onSelect(car)}>
    <img src={car.image} alt={car.name} className="car-image" />
    <div className="car-info">
      <h3>{car.name}</h3>
      <FiBookmark className="bookmark-icon" />
      <div className="car-details">
        <span>Style: {car.style}</span>
        <span>Type: {car.type}</span>
        <span>Color: {car.color}</span>
      </div>
      <div className="car-price">${car.price.toLocaleString()}</div>
    </div>
  </div>
);

const RecentActivity = ({ activities }) => (
  <div className="recent-activity">
    <h2>Recent Activity <FiSearch className="info-icon" /></h2>
    <div className="activity-list">
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <img src={activity.image} alt={activity.car} className="activity-car-image" />
          <div className="activity-details">
            <h3>{activity.car}</h3>
            <p><FiClock /> {activity.duration}</p>
            <p><FiMapPin /> {activity.location}</p>
            <p className="activity-price">${activity.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CarInfo = ({ carInfo }) => (
  <div className="car-info">
    <h2>Car Info <FiSearch className="info-icon" /></h2>
    <div className="driver-info">
      <img src={carInfo.driver.avatar} alt={carInfo.driver.name} className="driver-avatar" />
      <div>
        <h3>{carInfo.driver.name}</h3>
        <p>{carInfo.driver.email}</p>
      </div>
    </div>
    <div className="journey-info">
      <div className="journey-point">
        <FiMapPin className="journey-icon start" />
        <span>Start Point</span>
        <p>{carInfo.journey.startPoint}</p>
      </div>
      <div className="journey-point">
        <FiMapPin className="journey-icon stop" />
        <span>Stop Point</span>
        <p>{carInfo.journey.stopPoint}</p>
      </div>
      <div className="journey-point">
        <FiMapPin className="journey-icon finish" />
        <span>Finish Point</span>
        <p>{carInfo.journey.finishPoint}</p>
      </div>
    </div>
    <div className="car-stats">
      {Object.entries(carInfo.stats).map(([key, value], index) => (
        <div key={index} className="stat-item">
          <span>{key}</span>
          <p>{value}</p>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  const [theme, setTheme] = useState('light');
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const userInfo = {
    name: 'Smith',
    avatar: user
  };

  const cars = [
    { name: "Audi's R8 Green", style: 'Audi', type: 'Auto', color: 'Black', price: 285892, image: Audi1 },
    { name: "Ducati Speed Triple", style: 'Ducati', type: 'Petrol', color: 'Black', price: 358174, image: Ducati1 },
    { name: "Kawasaki Z1000", style: 'Kawasaki', type: 'Petrol', color: 'Green', price: 358174, image: Z1000 },
    { name: "Supra", style: 'Toyota', type: 'Petrol', color: 'Orange', price: 358174, image: Supra1 },
    { name: "Ferrari F40", style: 'Ferrari', type: 'Petrol', color: 'Red', price: 358174, image: F40 },
    { name: "Ferrari F8", style: 'Ferrari', type: 'Petrol', color: 'Red', price: 358174, image: F8 },
    { name: "Kawasaki H2", style: 'Kawasaki', type: 'Petrol', color: 'Brown', price: 358174, image: H2 },
    { name: "Jeep ", style: 'Jeep', type: 'Petrol', color: 'Brown', price: 358174, image: jeep1 },
    { name: "Lamborghini Aventador", style: 'Lamborghini', type: 'Petrol', color: 'Black', price: 358174, image: Lamborghini },
    { name: "Bentley ", style: 'Bentley', type: 'Petrol', color: 'Black', price: 358174, image: Bentley1 },
    { name: "Mazda Rx7 ", style: 'Mazda', type: 'Petrol', color: 'Orange and Black', price: 358174, image: Rx7 },
    { name: "Triumph", style: 'Triumph', type: 'Petrol', color: 'Black', price: 358174, image: Triumph },
    { name: "Range Rover ", style: 'Range Rover', type: 'Petrol', color: 'Black', price: 358174, image: Range_Rover },
  ];

  const recentActivities = [
    {
      car: 'Lamborghini Autofill',
      duration: '2 Day Rental Going',
      location: 'Georgia, bilisi, 14 vendetta',
      price: 358174,
      image: Lamborghini,
    },
    {
      car: 'Another Car Model',
      duration: '1 Day Rental Completed',
      location: 'New York, USA',
      price: 24170,
      image: Bentley1,
    },
  ];

  const carInfo = {
    driver: {
      name: 'Steven Robert',
      email: 'stevenrobert@gmail.com',
      avatar: user,
    },
    journey: {
      startPoint: 'Georgia,bilisi,14',
      stopPoint: '105 Saint Laurence,UK',
      finishPoint: '103 Chicago',
    },
    stats: {
      'Total Distance': '48 KM',
      'Travelled': '2h 18m',
      'Speed': '70km/h',
      'Fuel': '12 Liters',
      'People Used': '4 Person',
      'Condition': 'Average',
    },
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className="dashboard">
      <Sidebar toggleTheme={toggleTheme} theme={theme} user={userInfo} />
      <div className="main-content">
        <div className="content-area">
          <div className="dashboard-header">
            <div>
              <h1>Dashboard</h1>
              <p>Get your latest update for the last 7 days</p>
            </div>
            <button className="filter-btn">Filter by</button>
          </div>
          <div className="filters">
            <FilterDropdown label="Location" options={['GBT, Mall Gulshan', 'New York', 'London']} />
            <FilterDropdown label="Pick Up Date" options={['06-Sep-2023', '07-Sep-2023', '08-Sep-2023']} />
            <FilterDropdown label="Drop of Date" options={['06-Sep-2023', '07-Sep-2023', '08-Sep-2023']} />
            <FilterDropdown label="Pickup Time" options={['10:00 AM', '11:00 AM', '12:00 PM']} />
            <FilterDropdown label="Drop off Time" options={['05:00 PM', '06:00 PM', '07:00 PM']} />
          </div>
          <div className="available-cars">
            <h2>Available Cars</h2>
            <div className="car-grid">
              {cars.map((car, index) => (
                <CarCard key={index} car={car} onSelect={handleCarSelect} />
              ))}
            </div>
          </div>
          {/* <div className="info-section">
            <RecentActivity activities={recentActivities} />
            <CarInfo carInfo={carInfo} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;