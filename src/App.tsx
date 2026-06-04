/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Vision from './components/Vision/Vision';
import Progress from './components/Progress/Progress';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  return (
    <div id="elementum-app-root">
      <Navbar />
      <main id="elementum-main-stack">
        <Hero />
        <Vision />
        <Progress />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

