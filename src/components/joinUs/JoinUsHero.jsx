import { Fade } from 'react-awesome-reveal';
import { Calendar, CheckCircle, BookOpen } from 'lucide-react';

const JoinUsHero = ({ activeRecruitmentEvent }) => {
  return (
    <Fade triggerOnce duration={2000}>
      <section className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-6">
            Become a Member
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join UIUELF Today
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            UIU English Language Forum consists of the students of UIU who are eager to improve their
            English language proficiency. Not only English proficiency but also work with students career development.
          </p>

          {activeRecruitmentEvent && (
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-4xl mx-auto mt-8">
              <h3 className="text-xl font-semibold text-[#ec4622] mb-4">Recruitment Details</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-[#ec4622] shrink-0" size={20} />
                  <div>
                    <span className="block text-gray-400 text-sm">Duration</span>
                    <span className="font-medium">
                      {new Date(activeRecruitmentEvent.registrationStart).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} - {new Date(activeRecruitmentEvent.registrationEnd).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#ec4622] shrink-0" size={20} />
                  <div>
                    <span className="block text-gray-400 text-sm">Venue</span>
                    <span className="font-medium">UIU Campus & Online</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="text-[#ec4622] shrink-0" size={20} />
                  <div>
                    <span className="block text-gray-400 text-sm">Time</span>
                    <span className="font-medium text-sm">
                      10:00 AM - 4:30 PM (Campus)<br/>
                      24 Hours (Online)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Fade>
  );
};

export default JoinUsHero;
