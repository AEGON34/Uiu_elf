import { Users, Award, Mic, BookOpen, UserCheck, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Seminars & Workshops',
      description: 'Engage in expert-led sessions on public speaking, corporate grooming, and 21st-century competencies.',
    },
    {
      icon: Award,
      title: 'Competitions',
      description: 'Participate in inter-university contests like "Presentation Champs", debates, and quiz challenges.',
    },
    {
      icon: Mic,
      title: 'Interactive Sessions',
      description: 'Overcome stage fright with "Speak Bold", "Talent Hunt", and storytelling workshops.',
    },
    {
      icon: BookOpen,
      title: 'Study Circles',
      description: 'Collaborative learning groups focused on vocabulary building, grammar, and creative writing.',
    },
     {
      icon: UserCheck,
      title: 'Career Development',
      description: 'Career talks with HR leaders, CV writing workshops, and direct recruitment sessions.',
    },
     {
      icon: Search,
      title: 'Study Abroad Support',
      description: 'Roadshows and guidance for higher education with partners like IDP Education.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium ">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Activities & Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             To develop the English language skill we arrange seminars, workshops, competitions, interactive sessions and study circles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#ec4622]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ec4622] transition-colors duration-300">
                <feature.icon
                  size={28}
                  className="text-[#ec4622] group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
