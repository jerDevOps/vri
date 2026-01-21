import React, { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Components
import Hero from './components/home/Hero';
import AboutSection from './components/home/AboutSection';
import QuickAccess from './components/home/QuickAccess';
import NewsSection from './components/home/NewsSection';
import CallsAndDirections from './components/home/CallsAndDirections';
import InstitutionalStats from './components/home/InstitutionalStats';
import EventsSection from './components/home/EventsSection';

// UI Components
import SearchModal from './components/ui/SearchModal';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearchClick={() => setSearchOpen(true)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <QuickAccess />
        <NewsSection />
        <CallsAndDirections />
        <InstitutionalStats />
        <EventsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
