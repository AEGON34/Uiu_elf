import { Target, Users, Lightbulb, Globe, Mic, Briefcase } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive network of learners and future leaders.",
    },
    {
      icon: Mic,
      title: "Public Speaking",
      description: "Conquer stage fright and become an articulate speaker.",
    },
    {
      icon: Briefcase,
      title: "Corporate Skills",
      description: "Master professional grooming and workplace communication.",
    },
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "English proficiency as a tool for international success.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium ">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These values guide everything we do and shape the UIUELF experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 bg-linear-to-br from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#ec4622]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon size={32} className="text-[#ec4622]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
