import React from 'react';
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Portfolio } from '../components/Portfolio';
import { Curriculum } from "../components/Curriculum";
import { Services } from '../components/Services';
import { Start } from '../components/Start';
import { Contact } from '../components/Contact';
import { Header } from '../components/layout/Header';
import { Foot } from '../components/layout/Foot';

export const MyRoute = () => {
  return (
    <BrowserRouter>
      {/* Header and Navbar */}
      <Header />
      {/* Main */}
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/start" element={<Start />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer */}
      <Foot />
    </BrowserRouter>
  );
}
