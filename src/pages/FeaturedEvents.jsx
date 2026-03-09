import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventsData } from "../data/eventsData";

const FeaturedEvents = () => {
  useEffect(() => {
    document.title = "UIUELF | Featured Events";
    window.scrollTo(0, 0);
  }, []);

  const featuredEvents = eventsData
    .filter((event) => event.type === "featured")
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#fdfbf7] dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#fdfbf7] to-[#f5f0e6] dark:from-gray-900 dark:to-gray-800"></div>
        <div className="absolute top-0 right-0 p-32 bg-[#ec4622]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 p-32 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade triggerOnce duration={1500}>
            <span className="inline-block px-4 py-2 bg-[#ec4622]/10 text-[#ec4622] rounded-full text-sm font-medium mb-6">
              Our Flagship Programs
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Featured <span className="text-[#ec4622]">Events</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the hallmark events of UIU English Language Forum. From grand competitions 
              to impactful workshops, these events represent our commitment to excellence and growth.
            </p>
          </Fade>
        </div>
      </section>

      {/* Events List (Forced to Light Background) */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {featuredEvents.map((event, index) => {
            const isReverse = index % 2 !== 0;
            
            return (
              <div 
                key={event.id} 
                className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <Fade triggerOnce direction={isReverse ? "right" : "left"} duration={1200}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        style={{ aspectRatio: '3/2' }}
                      />
                    </div>
                  </Fade>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                  <Fade triggerOnce direction={isReverse ? "left" : "right"} duration={1200} delay={200}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-xs font-semibold uppercase tracking-wider">
                          {event.category || "Event"}
                        </span>
                        {event.status === "Upcoming" && (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wider animate-pulse">
                            Upcoming
                          </span>
                        )}
                      </div>

                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {event.title}
                      </h2>

                      <div className="flex flex-wrap gap-4 text-gray-600 text-sm font-medium">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[#ec4622]" />
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-[#ec4622]" />
                          {event.venue || "TBA"}
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {event.details}
                      </p>

                      <div className="pt-4">
                        {event.title.includes("Presentation Champs") ? (
                           <Link 
                           to={event.title.includes("Season II") ? "/events/presentation-champs-s2" : "/events/presentation-champs-s1"}
                           className="inline-flex items-center px-6 py-3 bg-[#ec4622] text-white rounded-lg font-semibold hover:bg-[#d13d1c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                         >
                           View Full Details
                           <ArrowRight className="ml-2 w-5 h-5" />
                         </Link>
                        ) : event.title.includes("July 36 Challenge") ? (
                           <Link 
                             to="/events/july-36-challenge"
                             className="inline-flex items-center px-6 py-3 bg-[#ec4622] text-white rounded-lg font-semibold hover:bg-[#d13d1c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                           >
                             View Full Details
                             <ArrowRight className="ml-2 w-5 h-5" />
                           </Link>
                        ) : (
                           <Link 
                             to={`/events/${event.id}`}
                             className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                           >
                             See Details
                             <ArrowRight className="ml-2 w-5 h-5" />
                           </Link>
                        )}
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FeaturedEvents;