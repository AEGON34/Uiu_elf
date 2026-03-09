const ClubModerator = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 via-gray-800 to-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Club Moderator</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 hover:border-[#ec4622]/50 transition-colors duration-300">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img
                src="https://placehold.co/200x200/ec4622/ffffff?text=Dr.+Khan"
                alt="Dr. Muhammad Fazle Ramzan Khan"
                className="w-40 h-40 rounded-full object-cover border-4 border-[#ec4622]"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Dr. Muhammad Fazle Ramzan Khan</h3>
                <p className="text-[#ec4622] font-medium mb-1">Club Moderator</p>
                <p className="text-gray-400 text-sm mb-4">Associate Professor, Department of English, UIU</p>
                <p className="text-gray-300 leading-relaxed">
                  Assumed leadership in early 2024, steering the club toward a new era of linguistic excellence
                  and dynamic engagement. Under his mentorship, the forum continues to grow as a vibrant 
                  community of learners and future leaders, focusing on public speaking, corporate grooming, 
                  and professional communication skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubModerator;
