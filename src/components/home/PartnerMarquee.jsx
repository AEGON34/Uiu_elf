import Marquee from "react-fast-marquee";
import {
  partnersData,
  corporatePartners,
  mouPartners,
  sponsors,
} from "../../data/partnersData";

const PartnerMarquee = () => {
  const categories = [
    {
      title: "MoU Partners",
      description: "Strategic collaborations for mentorship & training",
      partners: mouPartners,
    },
    {
      title: "Sponsors",
      description: "Organizations supporting our initiatives",
      partners: sponsors,
    },
    {
      title: "Corporate Partners",
      description: "Industry leaders powering our events",
      partners: corporatePartners,
    },
    {
      title: "Club Partners",
      description: "University clubs & forums we collaborate with",
      partners: partnersData,
    },
  ];

  // Build marquee content with vertical dividers between categories
  const marqueeContent = categories
    .flatMap((category, idx) => [
      ...category.partners.map((partner) => (
        <div
          key={`${category.title}-${partner.id}`}
          className="mx-8 flex items-center justify-center shrink-0"
        >
          <img src={partner.logo} alt={partner.name} className="h-36 w-auto" />
        </div>
      )),
      // Add vertical divider after each category (including the last one)
      <div
        key={`divider-${idx}`}
        className="shrink-0 w-0.5 h-20 bg-linear-to-b from-transparent via-[#ec4622] to-transparent mx-4"
      ></div>,
    ])
    .filter(Boolean);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#ec4622]/20 text-[#ec4622] rounded-full text-sm font-medium ">Collaboration</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3">
            Our Partners & Collaborators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work alongside leading organizations, MoU partners, industry
            collaborators, and university clubs to bring you the best events and
            opportunities.
          </p>
        </div>

        {/* Partner Categories - Desktop View */}
        <div className="hidden lg:block mb-10">
          <div className="flex justify-between gap-4 mb-8 flex-wrap">
            {categories.map((category, idx) => (
              <div key={idx} className="flex items-center">
                <div className="text-center">
                  <h3 className="font-semibold text-[#ec4622] mb-0.5 text-md">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {category.description}
                  </p>
                </div>
                {idx < categories.length - 1 && (
                  <div className="shrink-0 w-0.5 h-12 bg-linear-to-b from-transparent via-[#ec4622] to-transparent mx-4 ml-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Marquee with Dividers */}
          <Marquee speed={80} gradientWidth={100} pauseOnHover={true}>
            {marqueeContent}
          </Marquee>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-base md:text-lg font-semibold text-[#ec4622] mb-1">
                  {category.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500">{category.description}</p>
              </div>
              <div className="space-y-4">
                {category.partners.length > 0 ? (
                  <Marquee speed={50} gradientWidth={100} pauseOnHover={true}>
                    {category.partners.map((partner) => (
                      <div
                        key={`${partner.id}`}
                        className="mx-6 flex items-center justify-center shrink-0"
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-32 md:h-36 w-auto"
                        />
                      </div>
                    ))}
                  </Marquee>
                ) : (
                  <p className="text-center text-gray-400 text-sm">
                    No partners yet
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
