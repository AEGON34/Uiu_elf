import { useState, useMemo, useEffect } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Search, Filter, Calendar, Zap } from "lucide-react";
import EventCard from "../components/events/EventCard";
import { eventsData } from "../data/eventsData";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    document.title = "UIUELF | Events";
  }, []);

  const categories = [
    "All",
    "Competition",
    "Workshop",
    "Seminar",
    "Orientation",
    "Tour",
    "Event",
    "Volunteering",
    "Career Session",
  ];
  const statuses = ["All", "Upcoming", "Ongoing", "Past"];

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    return eventsData
      .filter((event) => {
        const matchesSearch =
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.details.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          selectedCategory === "All" || event.category === selectedCategory;
        const matchesStatus =
          selectedStatus === "All" || 
          (selectedStatus === "Upcoming" && event.status.includes("Upcoming")) ||
          (selectedStatus === "Ongoing" && event.status.includes("Ongoing")) ||
          (selectedStatus === "Past" && event.status === "Past");
        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest first
  }, [searchQuery, selectedCategory, selectedStatus]);

  // Group events by category in specific order
  const groupedEvents = useMemo(() => {
    const categoryOrder = ["Competition", "Workshop", "Seminar", "Orientation"];
    const groups = {};

    // Initialize primary categories
    categoryOrder.forEach((cat) => {
      groups[cat] = [];
    });

    // First pass: distribute events to primary categories
    filteredEvents.forEach((event) => {
      if (categoryOrder.includes(event.category)) {
        groups[event.category].push(event);
      } else {
        // Create group for each other category dynamically
        if (!groups[event.category]) {
          groups[event.category] = [];
        }
        groups[event.category].push(event);
      }
    });

    // Return only non-empty groups in order (primary first, then others in order of appearance)
    const result = {};
    categoryOrder.forEach((cat) => {
      if (groups[cat].length > 0) {
        result[cat] = groups[cat];
      }
    });

    // Add other categories in order of appearance
    Object.keys(groups).forEach((cat) => {
      if (!categoryOrder.includes(cat) && groups[cat].length > 0) {
        result[cat] = groups[cat];
      }
    });

    return result;
  }, [filteredEvents]);

  // const ongoingCount = eventsData.filter((e) => e.status === "Ongoing").length;
  // const upcomingCount = eventsData.filter(
  //   (e) => e.status === "Upcoming",
  // ).length;
  // const pastCount = eventsData.filter((e) => e.status === "Past").length;

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <Fade triggerOnce duration={2000}>
        <section className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-6">
              Our Events
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Discover workshops, seminars, and competitions designed to enhance
              your skills and boost your confidence.
            </p>

            {/* Stats */}
            {/* <div className="flex justify-center space-x-8">
              {ongoingCount > 0 && (
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">
                    {ongoingCount}
                  </div>
                  <div className="text-sm text-gray-400">Ongoing</div>
                </div>
              )}
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ec4622]">
                  {upcomingCount}
                </div>
                <div className="text-sm text-gray-400">Upcoming</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{pastCount}</div>
                <div className="text-sm text-gray-400">Past Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  {eventsData.length}
                </div>
                <div className="text-sm text-gray-400">Total Events</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
        </Fade>

      {/* Filters Section */}
      <Slide direction="down" triggerOnce duration={1500} fraction={0.1}>
      <section className="pt-8 pb-4 md:pt-8 md:pb-8 bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ec4622]"
                size={20}
              />{" "}
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ec4622] focus:border-transparent transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              <div className="flex flex-col gap-4">
                {/* Category Filter */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <div className="flex items-center gap-2 min-w-fit">
                    <Filter size={18} className="text-[#ec4622]" />
                    <span className="text-sm text-gray-600 font-medium">
                      Category:
                    </span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full lg:w-auto no-scrollbar">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                          selectedCategory === category
                            ? "bg-[#ec4622] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <div className="flex items-center gap-2 min-w-fit">
                    <Zap size={18} className="text-[#ec4622]" />
                    <span className="text-sm text-gray-600 font-medium">
                      Status:
                    </span>
                  </div>
                  <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full lg:w-auto no-scrollbar">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                          selectedStatus === status
                            ? "bg-[#ec4622] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Slide>

      {/* Events Sections by Category */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filteredEvents.length}
              </span>{" "}
              events
              {selectedCategory !== "All" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-[#ec4622] font-medium">
                    {selectedCategory}
                  </span>
                </span>
              )}
              {selectedStatus !== "All" && (
                <span> ({selectedStatus.toLowerCase()})</span>
              )}
            </p>
          </div>

          {/* Events by Category */}
          {filteredEvents.length > 0 ? (
            <div className="space-y-14">
              {Object.entries(groupedEvents).map(([category, events]) => (
                <div key={category}>
                  {/* Category Header with Unique Divider */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex-1 shrink-0">
                      <Slide direction="left" triggerOnce duration={1000}>
                        <div className="h-0.5 bg-linear-to-r from-transparent via-[#ec4622] to-transparent rounded-full"></div>
                      </Slide>
                    </div>
                    
                    <Fade triggerOnce duration={1000} delay={500}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#ec4622] rounded-lg blur-md opacity-50"></div>
                        <h2 className="relative text-2xl md:text-3xl font-bold text-gray-900 px-6 py-2 bg-white rounded-lg border-2 border-[#ec4622]">
                          {category}
                        </h2>
                      </div>
                    </Fade>

                    <div className="flex-1 shrink-0">
                      <Slide direction="right" triggerOnce duration={1000}>
                        <div className="h-0.5 bg-linear-to-l from-transparent via-[#ec4622] to-transparent rounded-full"></div>
                      </Slide>
                    </div>
                  </div>

                  {/* Events Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <Fade cascade damping={0.2} triggerOnce duration={1500}>
                    {events.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                    </Fade>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No events found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="px-6 py-3 bg-[#ec4622] text-white rounded-lg font-medium hover:bg-[#d13d1c] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <Zoom triggerOnce duration={1500}>
      <section className="py-16 bg-linear-to-r from-[#ec4622] to-[#d13d1c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't Miss Out on Our Next Event!
          </h2>
          <p className="text-white/90 mb-8">
            Join UIUELF to get early access to event registrations and exclusive
            member benefits.
          </p>
          <a
            href="/join"
            className="inline-flex items-center px-8 py-4 bg-white text-[#ec4622] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Member
          </a>
        </div>
      </section>
      </Zoom>
    </div>
  );
};

export default Events;
