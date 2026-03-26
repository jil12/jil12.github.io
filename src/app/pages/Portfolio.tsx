import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Work } from '../components/Work';
import { Toolkit } from '../components/Toolkit';
import { About } from '../components/About';
import { Footer } from '../components/Footer';

export function Portfolio() {
  return (
    <>
      <Navigation />
      <Hero />
      <Work />
      <Toolkit />
      <About />
      <Footer />
    </>
  );
}
