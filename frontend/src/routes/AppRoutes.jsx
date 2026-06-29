import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import DigiTeach from '../pages/DigiTeach';
import Programs from '../pages/Programs';
import Resources from '../pages/Resources';
import Events from '../pages/Events';
import News from '../pages/News';
import Partners from '../pages/Partners';
import Volunteer from '../pages/Volunteer';
import Donate from '../pages/Donate';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Public Routes under MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/digiteach" element={<DigiTeach />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth & Admin Routes under DashboardLayout / Simple layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<DashboardLayout />}>
        {/* We can add sub-routes for the Dashboard here if needed */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
