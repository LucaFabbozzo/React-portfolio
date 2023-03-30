import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from "react-router-dom";
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

      {/* container principal */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/start" />} />
          <Route path="/start" element={<Start />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className='page'>
              <h1 className='heading'>Error 404</h1>
            </div>
          } />
        </Routes>
      </section>
      {/* Footer */}
      <Foot />
    </BrowserRouter>
  );
}
