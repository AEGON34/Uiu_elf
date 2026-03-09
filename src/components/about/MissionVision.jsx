import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import conferenceAnimation from '../../assets/lottie/conference.lottie?url';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ec4622]/10 rounded-full text-[#ec4622] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec4622] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec4622]"></span>
              </span>
              <span>Our Mission & Vision</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Bridging <span className="text-[#ec4622]">Academic Learning</span>{" "}
              & Professional Communication
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                The UIU English Language Forum is a premier student body at
                United International University dedicated to bridging the gap
                between academic learning and professional communication.
              </p>
              <p className="border-l-4 border-[#ec4622] pl-4 italic text-gray-700 bg-gray-50 py-2 rounded-r-lg">
                We believe that{" "}
                <span className="text-[#ec4622] font-bold">
                  English proficiency
                </span>{" "}
                is not just about language—it is a tool for leadership, career
                advancement, and global connectivity.
              </p>
              <p>
                Our mission is to cultivate a thriving ecosystem where students
                can overcome the fear of public speaking, master corporate
                communication, and develop critical soft skills. Through diverse
                seminars, interactive workshops, competitions, and study
                circles, we empower students to become articulate, confident,
                and career-ready professionals.
              </p>
            </div>
          </div>
          {/* Right Column: Animation */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#ec4622]/10 rounded-3xl"></div>
            <div className="relative rounded-2xl shadow-xl w-full aspect-3/2 overflow-hidden bg-gray-50">
              <DotLottieReact
                src={conferenceAnimation}
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
