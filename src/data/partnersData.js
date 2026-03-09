// Import all partner images from ../assets/partners/
// We accept png, jpg, jpeg, svg, webp
const partnerImages = import.meta.glob('../assets/partners/*.{png,jpg,jpeg,svg,webp}', { eager: true });

// Helper to resolve image paths
const resolveImage = (path) => {
  // Return early if it's an external URL
  if (path.startsWith('http')) return path;
  
  // Try to resolve from glob
  const resolved = partnerImages[path];
  if (resolved) return resolved.default;
  
  // Fallback or return original if not found (will 404 in network tab)
  // console.warn(`Image not found: ${path}`);
  return path;
};

// MoU Partners
const rawMouPartners = [
  { id: 1, name: "Akij Resource", logo: "../assets/partners/AKIJ_RESOURCES.png", type: "MoU" },
  { id: 2, name: "Don Sumdany Facilitation", logo: "../assets/partners/DON_SUMDANY.png", type: "MoU" },
];

// Industry/Corporate Partners
const rawCorporatePartners = [
  { id: 1, name: "Grameenphone Academy", logo: "../assets/partners/GP_ACADEMY.png" },
  { id: 2, name: "Augmedix Bangladesh", logo: "../assets/partners/AGUMEDIX.png" },
  { id: 3, name: "BRAC Bank Limited", logo: "../assets/partners/BRAC_BANK.png" },
  { id: 4, name: "IDP Education", logo: "../assets/partners/IDP.png" },
  { id: 5, name: "10 Minute School", logo: "../assets/partners/10_MINUTE_SCHOOL.png" },
];

// Club & Forum Partners
const rawPartnersData = [
  { id: 1, name: "UIU Debate Club", logo: "../assets/partners/DC.png" },
  { id: 2, name: "UIU Model United Nations", logo: "../assets/partners/MUN.png" },
  { id: 3, name: "UIU Entrepreneur Development Forum", logo: "../assets/partners/EDF.png" },
  { id: 4, name: "UIU Accounting Forum", logo: "../assets/partners/AF.png" },
  { id: 5, name: "UIU HR Forum", logo: "../assets/partners/HRF.png" },
  { id: 6, name: "UIU Photography Club", logo: "../assets/partners/PC.png" },
  { id: 7, name: "CIAC", logo: "../assets/partners/CIAC.png" },
  { id: 8, name: "SIAS", logo: "../assets/partners/SIAS.png" },
];

// Sponsors
const rawSponsors = [
  { id: 1, name: "TCL Global", logo: "../assets/partners/TCL_GLOBAL.png" },
  { id: 2, name: "Global Study", logo: "../assets/partners/GLOBAL_STUDY.png" },
  { id: 3, name: "Bongo", logo: "../assets/partners/BONGO.png" },
];

// Export processed data
export const mouPartners = rawMouPartners.map(p => ({ ...p, logo: resolveImage(p.logo) }));
export const corporatePartners = rawCorporatePartners.map(p => ({ ...p, logo: resolveImage(p.logo) }));
export const partnersData = rawPartnersData.map(p => ({ ...p, logo: resolveImage(p.logo) }));
export const sponsors = rawSponsors.map(p => ({ ...p, logo: resolveImage(p.logo) }));
