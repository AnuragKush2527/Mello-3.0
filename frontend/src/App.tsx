import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Groups from './pages/Groups';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import CreateEvent from './pages/CreateEvent';
import Profile from './pages/Profile';
import JoinedEvents from './pages/JoinedEvents';
import MyBuddies from './pages/MyBuddies';
import HostedEvents from './pages/HostedEvents';

export default function App() {
  // Mock authentication state - replace with actual auth logic
  const isAuthenticated = true;

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard/joined-events"
              element={isAuthenticated ? <JoinedEvents /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard/hosted-events"
              element={isAuthenticated ? <HostedEvents /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard/buddies"
              element={isAuthenticated ? <MyBuddies /> : <Navigate to="/login" />}
            />
            <Route
              path="/create-event"
              element={isAuthenticated ? <CreateEvent /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        {/* Only show footer on non-dashboard pages */}
        <Routes>
          <Route path="/dashboard/*" element={null} />
          <Route path="/profile" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}