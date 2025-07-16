import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomePage from './components/WelcomePage';
import ImportPage from './components/ImportPage';
import TemplateSelection from './components/TemplateSelection';


function ResumeBuilder() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'welcome':
        return (
          <WelcomePage 
            onImportResume={() => setCurrentPage('import')}
            onCreateNew={() => setCurrentPage('templates')}
          />
        );
      case 'import':
        return (
          <ImportPage 
            onBack={() => setCurrentPage('welcome')}
            onContinue={() => setCurrentPage('templates')}
          />
        );
      case 'templates':
        return (
          <TemplateSelection 
            onBack={() => setCurrentPage('welcome')}
            onSelectTemplate={() => setCurrentPage('welcome')}
          />
        );
      default:
        return <WelcomePage onImportResume={() => setCurrentPage('import')} onCreateNew={() => setCurrentPage('templates')} />;
    }
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="page-container"
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default ResumeBuilder;