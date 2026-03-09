import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const EventDetailsContent = ({ event }) => {
  const isRegistrationOpen = event.status === "Ongoing (Registration Open)";
  const isUpcoming = event.status.includes("Upcoming");

  const handleRegisterClick = () => {
    if (isUpcoming) {
        Swal.fire({
          icon: 'info',
          title: 'Not Started',
          text: 'Registration has not started yet',
          confirmButtonColor: '#ec4622'
        });
    }
  };

  return (
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
          {event.category}
        </span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {event.title}
      </h1>

      <div className="prose max-w-none text-gray-600 mb-8">
         <h3 className="text-xl font-semibold text-gray-800 mb-3">About the Event</h3>
         <p className="whitespace-pre-line leading-relaxed">
           {event.details}
         </p>
      </div>

      <div className="mt-8">
        {isRegistrationOpen ? (
            <Link 
            to={event.category === 'recruitment' ? '/join-us' : `/register/${event.id}`}
            className="inline-block w-full md:w-auto text-center bg-[#ec4622] hover:bg-[#d13d1c] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
            {event.category === 'recruitment' ? 'Join Us' : 'Register Now'}
            </Link>
        ) : (
            <button
            onClick={handleRegisterClick}
            disabled={!isUpcoming}
            className={`inline-block w-full md:w-auto text-center font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md ${
                isUpcoming
                ? "bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            >
            {isUpcoming ? 'Registration Not Started' : 'Registration Closed'}
            </button>
        )}
      </div>
    </div>
  );
};

export default EventDetailsContent;
