import { useParams, Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { eventsData } from '../data/eventsData';
import EventDetailsHero from '../components/events/EventDetailsHero';
import EventDetailsContent from '../components/events/EventDetailsContent';
import EventDetailsSidebar from '../components/events/EventDetailsSidebar';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));

  useEffect(() => {
    if (event) {
      document.title = `UIUELF | ${event.title}`;
    } else {
      document.title = 'UIUELF | Event Not Found';
    }
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
        <Link to="/events" className="mt-4 text-[#ec4622] hover:underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Fade triggerOnce duration={1500} cascade damping={0.2}>
        <Link to="/events" className="inline-flex items-center text-gray-600 hover:text-[#ec4622] mb-6 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Back to Events
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Hero Image */}
        <EventDetailsHero event={event} />

        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <EventDetailsContent event={event} />

            {/* Sidebar Details */}
            <EventDetailsSidebar event={event} />
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default EventDetails;
