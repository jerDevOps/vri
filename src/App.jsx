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
import Institutos from './pages/Institutos';
import ResearchGroups from './pages/ResearchGroups';
import Semilleros from './pages/Semilleros';
import Renacyt from './pages/Renacyt';
import AboutPage from './pages/AboutPage';
import ScientificJournals from './pages/ScientificJournals';

// UI Components
import SearchModal from './components/ui/SearchModal';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  useScrollReveal(currentPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#idi') {
        setCurrentPage('idi');
      } else if (hash === '#institutos') {
        setCurrentPage('institutos-lista');
      } else if (hash === '#grupos') {
        setCurrentPage('groups');
      } else if (hash === '#semilleros') {
        setCurrentPage('semilleros');
      } else if (hash === '#renacyt') {
        setCurrentPage('renacyt');
      } else if (hash === '#nosotros') {
        setCurrentPage('about');
      } else if (hash === '#revistas') {
        setCurrentPage('revistas');
      } else {
        // Cualquier otro hash o hash vacío vuelve al home
        setCurrentPage('home');
      }

      // Asegurar que el scroll vuelva arriba y se limpien posibles estados de reveal
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSearchClick={() => setSearchOpen(true)}
        theme={(currentPage === 'idi' || currentPage === 'groups' || currentPage === 'semilleros' || currentPage === 'institutos-lista' || currentPage === 'renacyt') ? 'idi' : 'default'}
      />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <AboutSection />
            <QuickAccess />
            <NewsSection />
            <CallsAndDirections />
            <InstitutionalStats />
            <EventsSection />
          </>
        )}
        {currentPage === 'idi' && <ResearchInstitute />}
        {currentPage === 'institutos-lista' && <Institutos />}
        {currentPage === 'groups' && <ResearchGroups />}
        {currentPage === 'semilleros' && <Semilleros />}
        {currentPage === 'renacyt' && <Renacyt />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'revistas' && <ScientificJournals />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
