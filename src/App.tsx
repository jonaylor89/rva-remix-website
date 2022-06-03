import Navbar from './sections/NavBar';
import HeaderSection from './sections/HeaderSection';
import PrizesSection from './sections/PrizesSection';
import ScheduleSection from './sections/ScheduleSection';
import HostsSection from './sections/HostsSection';
import SponsorSection from './sections/SponsorSection';
import Footer from './sections/Footer';
import TeamSection from './sections/TeamSection';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeaderSection />
      <PrizesSection />
      <ScheduleSection />

      {/* TODO */}
      <HostsSection />
      <SponsorSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
