import MainContent from './components/MainContent';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-white via-[#f0f4ff] to-[#e0ffee] opacity-80"></div>

      <div className="flex-1">
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;
