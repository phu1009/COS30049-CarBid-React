import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard.jsx'
import ActiveBids from './Bid.jsx'
import Deal from './Deal.jsx'
import Settings from './Settings.jsx'
import Statistics from './Statistics.jsx'
import Tracking from './Tracking.jsx'
import Listing from './Listing.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/active-bids" element={<ActiveBids />} />
        <Route path="/deals" element={<Deal />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/tracking" element={<Tracking />} />

      </Routes>
    </Router>
  </React.StrictMode>
)