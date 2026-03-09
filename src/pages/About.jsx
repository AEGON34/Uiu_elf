import { useEffect } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import History from '../components/about/History';
import CoreValues from '../components/about/CoreValues';
import FAQ from '../components/home/FAQ';

const About = () => {
  useEffect(() => {
    document.title = 'UIUELF | About Us';
  }, []);

  return (
    <div className="min-h-screen">
      <Fade triggerOnce duration={2000}>
        <AboutHero />
      </Fade>
      <Slide direction="up" triggerOnce duration={1500}>
        <MissionVision />
      </Slide>
      <Slide direction="up" triggerOnce duration={1500}>
        <History />
      </Slide>
      <Zoom triggerOnce duration={1500}>
        <CoreValues />
      </Zoom>
      <Slide direction="up" triggerOnce duration={1500}>
        <FAQ />
      </Slide>
    </div>
  );
};

export default About;
