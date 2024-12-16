import HeroSection from './components/Herosection';
import Arrivals from './components/Arrivals';
import Blog from './components/Blog';
import Instagram from './components/Instagram';

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <HeroSection />
      <Arrivals />
      <Blog />
      <Instagram />
    </div>
  );
}
