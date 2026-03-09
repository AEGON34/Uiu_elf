import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import EventCard from "../events/EventCard";
import { eventsData } from "../../data/eventsData";

const RecentEvents = () => {
  // Get top 3 events sorted by date (newest first)
  const recentEvents = [...eventsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ec4622]/10 rounded-full text-[#ec4622] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec4622] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec4622]"></span>
              </span>
              <span>Stay Updated</span>
            </div>{" "}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Recent & Upcoming Events
            </h2>
          </div>
          <Link
            to="/events"
            className="mt-4 md:mt-0 inline-flex items-center text-[#ec4622] font-medium hover:underline"
          >
            View All Events
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentEvents.map((event, index) => (
            <EventCard key={event.id} event={event} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
