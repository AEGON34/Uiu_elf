import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventDetailsSidebar = ({ event }) => {
  const isRecruitment = event.category.toLowerCase() === 'recruitment';
  const hasregistrationStart = event.registrationStart;
  const isPast = event.status && (event.status.includes('Past') || new Date(event.date) < new Date());

  // Use the event-specific registration time/venue or fall back to the default
  // The default for recruitment is explicitly requested, but the data should ideally have it. 
  // We keep the hardcoded backup just in case old data persists.
  const registrationTime = event.registrationTime || (isRecruitment ? '10:00 AM - 4:30 PM (Campus)\n24 Hours (Online)' : '');
  const registrationVenue = event.registrationVenue || (isRecruitment ? 'UIU Campus & Online' : '');

  // If recruitment, HIDE the standard Event Details section completely (unless strictly required by user, but logic says "hide event details" for recruitment)
  // User update: "and for all event including recruitment and others, registration time is..."
  // User update: "for ongoing and upcoming ... all information in the details section"
  // User update: "if event is past ... registration and event details in the details section"
  
  // So: Event Details are ALWAYS SHOWN for Past events.
  // For Ongoing/Upcoming: 
  //   - If Recruitment: The previous instruction was "event details section should be hidden". 
  //   - But the latest instruction says "for ongoing and upcoming... all information in the details section". 
  //   - HOWEVER, it also says "for recruitment no event date, time, venue can be found". 
  //   - This is contradictory. The safest bet is: specifically for RECRUITMENT in ONGOING state, hide event details (because they don't exist/are same as reg). 
  //   - For other ongoing events, show everything.
  
  const showEventDetails = isPast || !isRecruitment; 

  // If no registration start date, HIDE the Registration sidebar section
  if (!hasregistrationStart) {
    if (!showEventDetails) return null; 
    
    // For non-recruitment events without registration, just show standard details
    return (
      <div className="w-full md:w-80 shrink-0">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
          <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Event Information</h3>
          <div className="space-y-5">
             <div className="flex items-start group">
              <Calendar className="w-5 h-5 text-[#ec4622] mt-0.5 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Date</p>
                <p className="text-sm font-medium text-gray-900">
                  {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <Clock className="w-5 h-5 text-[#ec4622] mt-0.5 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Time</p>
                <p className="text-sm font-medium text-gray-900">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <MapPin className="w-5 h-5 text-[#ec4622] mt-0.5 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Venue</p>
                <p className="text-sm font-medium text-gray-900">{event.venue}</p>
              </div>
            </div>

            <div className="flex items-start group">
              <Tag className="w-5 h-5 text-[#ec4622] mt-0.5 mr-3 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Category</p>
                <p className="text-sm font-medium text-gray-900">{event.category}</p>
              </div>
            </div>
          </div>
          
           <div className="mt-8 pt-6 border-t border-gray-100">
             <p className="text-xs text-center text-gray-500">
               Need help? <Link to="/contact" className="text-[#ec4622] hover:underline">Contact Support</Link>
             </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-80 shrink-0">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
        <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
          {isRecruitment ? 'Recruitment Info' : 'Event Information'}
        </h3>
        
        <div className="space-y-8">
          {/* Registration Section */}
           <div>
             <h4 className="flex items-center text-xs font-bold text-[#ec4622] uppercase tracking-widest mb-4">
               <span className="w-2 h-2 rounded-full bg-[#ec4622] mr-2"></span>
               Registration Details
             </h4>
              <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                
                <div className="relative">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Dates</p>
                  <p className="text-sm font-medium text-gray-900">
                     {new Date(event.registrationStart).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} - {new Date(event.registrationEnd).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>

                {registrationTime && (
                   <div className="relative">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Time</p>
                      <p className="text-sm font-medium text-gray-900 whitespace-pre-line">
                        {registrationTime}
                      </p>
                  </div>
                )}
                
                {registrationVenue && (
                  <div className="relative">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Venue</p>
                      <p className="text-sm font-medium text-gray-900">
                        {registrationVenue}
                      </p>
                  </div>
                )}
             </div>
          </div>

          {/* Event Details Section (Hidden for Recruitment) */}
          {showEventDetails && (
             <div>
                <h4 className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 pt-4 border-t border-gray-100">
                  Event Details
                </h4>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.venue}</p>
                    </div>
                  </div>

                   <div className="flex items-start">
                     <Tag className="w-5 h-5 text-gray-400 mt-0.5 mr-3 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.category}</p>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
           <p className="text-xs text-center text-gray-500">
             Need help? <Link to="/contact" className="text-[#ec4622] hover:underline">Contact Support</Link>
           </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSidebar;
