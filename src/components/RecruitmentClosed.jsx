import { Link } from 'react-router-dom';
import { Hourglass } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const RecruitmentClosed = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-900 px-4">
      <Fade triggerOnce>
        <div className="text-center max-w-lg mx-auto p-8">
          <div className="flex justify-center mb-6">
            <Hourglass size={64} className="text-[#ec4622] animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold text-[#ec4622] mb-4">
            Recruitment Closed
          </h2>
          
          <p className="text-xl text-white font-medium mb-4">
            Wait for the next recruitment cycle
          </p>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            We're not currently accepting new applications. Please check back later for our next recruitment season!
          </p>
          
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-[#ec4622] text-white font-semibold rounded-lg hover:bg-[#d53f1f] transition duration-300 shadow-lg hover:shadow-[#ec4622]/30"
          >
            Return to Home
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default RecruitmentClosed;