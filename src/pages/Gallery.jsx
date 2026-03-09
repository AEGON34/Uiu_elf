// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { galleryData } from '../data/galleryData';
import GalleryGrid from '../components/gallery/GalleryGrid';
import ImageModal from '../components/gallery/ImageModal';
import photoUploadingAnim from '../assets/lottie/Photo_Uploading.lottie?url';

const Gallery = () => {
  // Get unique years and sort descending
  const years = useMemo(() => {
    const uniqueYears = [...new Set(galleryData.map(img => img.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const [selectedYear, setSelectedYear] = useState(years[0] || new Date().getFullYear());
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images by year
  const filteredImages = useMemo(() => {
    return galleryData.filter(img => img.year === selectedYear);
  }, [selectedYear]);

  // Modal navigation
  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]); // Next in visual order (newer first)
    }
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const hasNext = selectedImage && filteredImages.findIndex(img => img.id === selectedImage.id) > 0;
  const hasPrev = selectedImage && filteredImages.findIndex(img => img.id === selectedImage.id) < filteredImages.length - 1;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white pt-24 pb-12 px-4 shadow-xl overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Memories of <span className="text-[#ec4622]">ELF</span>
            </motion.h1>
            <motion.p
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.1, duration: 0.6 }}
               className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Capturing the moments that define our journey. Explore the vibrant history of UIU English Language Forum through the lens of our events.
            </motion.p>
          </div>

          {/* Lottie Animation */}
          <div className="flex-1 w-full max-w-md md:max-w-lg">
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="w-full h-auto"
             >
                <DotLottieReact
                  src={photoUploadingAnim}
                  loop
                  autoplay
                  className="w-full h-full"
                />
             </motion.div>
          </div>
        </div>
      </div>

      {/* Year Navigation */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedYear === year
                    ? 'bg-[#ec4622] text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No photos found for {selectedYear}</p>
          </div>
        ) : (
          <GalleryGrid 
            images={filteredImages} 
            onImageClick={setSelectedImage} 
          />
        )}
      </div>

      {/* Modal */}
      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
    </div>
  );
};

export default Gallery;
