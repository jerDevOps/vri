import React, { useState, useEffect } from 'react';
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

// Pages
import ResearchInstitute from './pages/ResearchInstitute';

// UI Components
import SearchModal from './components/ui/SearchModal';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  useScrollReveal();

  useEffect(() => {
    // Escuchar cambios en la URL (hash) si deseáramos usar react-router, 
    // pero por ahora usaremos un simple manejador para la propuesta.
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#idi') {
        setCurrentPage('idi');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSearchClick={() => setSearchOpen(true)}
        theme={currentPage === 'idi' ? 'idi' : 'default'}
      />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <AboutSection />
            <QuickAccess />
            <NewsSection />
            <CallsAndDirections />
            <InstitutionalStats />
            <EventsSection />
          </>
        ) : (
          <ResearchInstitute />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
