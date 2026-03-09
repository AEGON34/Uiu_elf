import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#ec4622]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Break Fear and Be Confident?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join the UIU English Language Forum today and start your journey towards becoming
          a confident communicator and future leader.
        </p>
        <Link
          to="/join"
          className="inline-flex items-center px-8 py-4 bg-white text-[#ec4622] rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Become a Member
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
