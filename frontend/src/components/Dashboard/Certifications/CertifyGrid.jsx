import React, { useState } from 'react';
import certifications from './certData';       
import CertCard from './CertCard';              
import { AnimatePresence, motion } from 'framer-motion'; // For animation effects

const CertifyGrid = () => {
  const itemsPerPage = 8;                       // Show 8 cards per page (4 columns x 2 rows)
  const [currentPage, setCurrentPage] = useState(0); // State to track which page is active

  const totalPages = Math.ceil(certifications.length / itemsPerPage); // Calculate total number of pages
  const startIndex = currentPage * itemsPerPage;                       // Starting index for current page
  const currentItems = certifications.slice(startIndex, startIndex + itemsPerPage); 

  const goToPage = (pageIndex) => {
    // Change the page when user clicks next or a page number
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Grid container for cards (responsive: 1 to 4 columns based on screen size) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 w-full">
        <AnimatePresence mode="wait">
          {currentItems.map((cert) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}   
              animate={{ opacity: 1, y: 0 }}    
              exit={{ opacity: 0, y: -20 }}     
              transition={{ duration: 0.3 }}    // Animation duration
              className="h-full"
            >
              <CertCard {...cert} />            {/* Render the certification card */}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Buttons */}
      <div className="flex items-center gap-2 flex-wrap justify-center">

        {/* ← Previous Page Button */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-3 py-1 rounded-full border border-purple-500 text-white hover:bg-purple-700 transition-all disabled:opacity-50"
        >
          ←
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`px-3 py-1 rounded-full border border-purple-500 text-white transition-all duration-300 
              ${currentPage === index ? 'bg-purple-600' : 'hover:bg-purple-700'}`}
          >
            {index + 1}
          </button>
        ))}

        {/* → Next Page Button */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1}
          className="px-3 py-1 rounded-full border border-purple-500 text-white hover:bg-purple-700 transition-all disabled:opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CertifyGrid;
