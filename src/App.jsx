import React, { useState, useEffect } from 'react';
import CorporateLayout from './layouts/CorporateLayout';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem('logiprime_ui_page') || 'home';
  });

  useEffect(() => {
    localStorage.setItem('logiprime_ui_page', currentPage);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="relative min-h-screen">
      <CorporateLayout currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
