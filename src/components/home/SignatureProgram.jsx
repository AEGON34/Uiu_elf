import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import englishEdgeLogo from '../../assets/logos/English_Edge.png';

const SignatureProgram = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium mb-6">
              Signature Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              English Edge
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              English Edge is the flagship skill development initiative of UIUELF. It is a comprehensive 
              training module designed to take students from basic proficiency to advanced professional 
              communication. The program ensures every participant leaves with tangible skills needed 
              to excel in job interviews, presentations, and cross-cultural environments.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#ec4622] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Public Speaking & Presentation Skills</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#ec4622] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Corporate Grooming & Professional Etiquette</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#ec4622] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Vocabulary Building & Creative Writing</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#ec4622] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-300">Intensive workshops by industry experts</span>
              </li>
            </ul>
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 bg-[#ec4622] text-white rounded-lg font-medium hover:bg-[#d13d1c] transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#ec4622]/20 rounded-3xl blur-2xl"></div>
            <img
              src={englishEdgeLogo}
              alt="English Edge Program"
              className="relative rounded-2xl shadow-2xl w-full aspect-4/3 bg-white backdrop-blur-sm p-4 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureProgram;
