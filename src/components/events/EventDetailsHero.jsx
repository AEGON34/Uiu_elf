const EventDetailsHero = ({ event }) => {
  return (
    <div className="relative h-96 md:h-96 w-full">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4">
        <span className={`px-4 py-2 rounded-full text-sm font-bold bg-[#ec4622] text-white shadow-lg`}>
          {event.status}
        </span>
      </div>
    </div>
  );
};

export default EventDetailsHero;
