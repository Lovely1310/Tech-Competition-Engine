import Administration from '../components/Administration/Administration';
import DeveloperNavbar from '../components/DeveloperNavbar';

function AdministrationPage() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <DeveloperNavbar />
      <Administration />
    </div>
  );
}

export default AdministrationPage;
