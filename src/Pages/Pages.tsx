import React from 'react';

import { Contact } from './contact/Contact';
import Features from './features/Features';
import Footer from './footer/Footer';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';
import { Work } from './work/Work';

export const Pages: React.FC = () => (
  <div>
    <Home />
    <Features />
    <Portfolio />
    <Work />
    <Contact />
    <Footer />
  </div>
);
