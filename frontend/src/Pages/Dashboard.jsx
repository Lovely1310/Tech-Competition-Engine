import DeveloperNavbar from '../components/DeveloperNavbar';
import MainContent from '../components/Dashboard/MainContent';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Top Navigation */}
      <DeveloperNavbar />

      {/* Animated Gradient Background */}
      <div
        className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-white via-[#f0f4ff] to-[#e0ffee] opacity-80"
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <MainContent />
      </main>
      
    </div>
  );
};

export default Dashboard;