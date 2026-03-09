import { useEffect } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import PartnerMarquee from '../components/home/PartnerMarquee';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
// import SignatureProgram from '../components/home/SignatureProgram';
import FlagshipProgram from '../components/home/FlagshipProgram';
import RecentEvents from '../components/home/RecentEvents';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  useEffect(() => {
    document.title = 'UIUELF | Home';
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Fade triggerOnce duration={2000}>
        <Hero />
      </Fade>

      {/* About Snippet Section */}
      <Slide direction="up" triggerOnce duration={1500}>
        <Features />
      </Slide>

      {/* Signature Program - English Edge */}
      <Zoom triggerOnce duration={1500}>
        {/* <SignatureProgram /> */}
        <FlagshipProgram />
      </Zoom>

      {/* Recent Events Section */}
      <Slide direction="up" triggerOnce duration={1500}>
        <RecentEvents />
      </Slide>

      {/* Partners Marquee */}
      <Fade triggerOnce duration={2000}>
        <PartnerMarquee />
      </Fade>

      {/* CTA Section */}
      <Zoom triggerOnce duration={1500}>
        <CallToAction />
      </Zoom>
    </div>
  );
};

export default Home;
