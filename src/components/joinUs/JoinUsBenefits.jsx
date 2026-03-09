import { Slide } from 'react-awesome-reveal';
import { Star, Users, Award, BookOpen, CheckCircle, Calendar } from 'lucide-react';

const benefits = [
  {
      icon: Star,
      title: 'English Edge Program',
      description: 'Access our signature program designed to take you from basic proficiency to advanced professional communication.',
  },
  {
      icon: Users,
      title: 'Career Development',
      description: 'Participate in CV writing workshops, mock interviews, and corporate grooming sessions.',
  },
  {
      icon: Award,
      title: 'Competitions',
      description: 'Compete in inter-university events like "Presentation Champs", debates, and quizzes.',
  },
  {
      icon: BookOpen,
      title: 'Public Speaking',
      description: 'Overcome stage fright through "Speak Bold", "Talent Hunt", and interactive storytelling sessions.',
  },
  {
      icon: CheckCircle,
      title: 'Global Opportunities',
      description: 'Get guidance on IELTS, scholarships, and higher education opportunities abroad.',
  },
   {
      icon: Calendar,
      title: 'Networking & Events',
      description: 'Connect with alumni and industry leaders at exclusive seminars and study circles.',
  },
];

const JoinUsBenefits = () => {
  return (
    <Slide direction="up" cascade triggerOnce duration={1500} damping={0.2}>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              As a UIUELF member, you'll gain access to exclusive opportunities and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#ec4622]/10 rounded-xl flex items-center justify-center shrink-0">
                  <benefit.icon className="text-[#ec4622]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default JoinUsBenefits;
