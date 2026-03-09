import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const EventCard = ({ event, featured = false }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusColor = (status) => {
    if (status.includes('Upcoming')) return 'bg-green-100 text-green-800';
    if (status.includes('Ongoing')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  const isRegistrationOpen = event.status === "Ongoing (Registration Open)";
  const isUpcoming = event.status.includes("Upcoming");
  const isOngoing = event.status.includes("Ongoing");

  const handleRegisterClick = (e) => {
    if (!isRegistrationOpen) {
      e.preventDefault();
      if (isUpcoming) {
        Swal.fire({
          icon: 'info',
          title: 'Not Started',
          text: 'Registration has not started yet',
          confirmButtonColor: '#ec4622'
        });
      }
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Competition: 'bg-purple-100 text-purple-800',
      Workshop: 'bg-blue-100 text-blue-800',
      Seminar: 'bg-orange-100 text-orange-800',
      Orientation: 'bg-teal-100 text-teal-800',
      Tour: 'bg-green-100 text-green-800',
      Event: 'bg-pink-100 text-pink-800',
      Volunteering: 'bg-yellow-100 text-yellow-800',
      Celebration: 'bg-red-100 text-red-800',
      'Career Session': 'bg-indigo-100 text-indigo-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
        (featured || isUpcoming || isOngoing) ? 'border-2 border-[#ec4622]' : 'border border-gray-100'
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
            {event.status}
          </span>
          {featured && !isUpcoming && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#ec4622] text-white">
              Featured
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center space-x-2 mb-3">
          <Tag size={14} className="text-gray-400" />
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#ec4622] transition-colors">
          {event.title}
        </h3>

        {/* Details */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.details}</p>

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          {event.registrationStart && !event.status.includes('Past') ? (
             <>
               <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-[#ec4622]" />
                <span className="font-medium text-gray-700">Reg: {formatDate(event.registrationStart)} - {formatDate(event.registrationEnd)}</span>
              </div>
              
              {event.category.toLowerCase() === 'recruitment' ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-[#ec4622]" />
                    <span>10:00 AM - 4:30 PM (Campus)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-[#ec4622]" />
                    <span>UIU Campus & Online</span>
                  </div>
                </>
              ) : (
                 <>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-[#ec4622]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-[#ec4622]" />
                    <span>{event.venue}</span>
                  </div>
                 </>
              )}
             </>
          ) : (
            <>
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-[#ec4622]" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} className="text-[#ec4622]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#ec4622]" />
                <span>{event.venue}</span>
              </div>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <Link 
            to={`/events/${event.id}`}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 text-center transition-colors duration-200"
          >
            View Details
          </Link>
          
          {isRegistrationOpen ? (
            <Link 
                to={event.category === 'recruitment' ? '/join-us' : `/register/${event.id}`}
                className="flex-1 bg-[#ec4622] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#d13d1c] text-center transition-colors duration-200"
            >
                {event.category === 'recruitment' ? 'Join Us' : 'Register'}
            </Link>
          ) : (
             <button
                onClick={handleRegisterClick}
                className={`flex-1 py-2 rounded-lg text-sm font-medium text-center transition-colors duration-200 ${
                    isUpcoming 
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!isUpcoming}
             >
                {isUpcoming ? 'Not Started' : 'Closed'}
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
