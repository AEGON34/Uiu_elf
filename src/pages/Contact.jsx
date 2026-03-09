import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';

const Contact = () => {
  useEffect(() => {
    document.title = 'UIUELF | Contact';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Fade triggerOnce>
        <ContactHero />

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>

        <ContactMap />
      </Fade>
    </div>
  );
};

export default Contact;