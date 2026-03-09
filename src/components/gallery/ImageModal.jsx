import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Info } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ImageModal = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-50"
        >
          <X size={32} />
        </button>

        <div className="relative w-full h-full flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
          
          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 h-[70vh] md:h-full">
            {hasPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-2 md:left-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all z-10"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            <motion.img
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={image.src}
              alt={image.title}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />

            {hasNext && (
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-2 md:right-4 p-2 bg-black/50 text-white rounded-full hover:bg-white/20 transition-all z-10"
              >
                <ChevronRight size={32} />
              </button>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="w-full md:w-96 bg-[#1a1a1a] p-6 text-white overflow-y-auto border-l border-white/10 h-[30vh] md:h-full">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
             >
                <h2 className="text-2xl font-bold mb-6 text-[#ec4622]">{image.title}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-200">Date</h3>
                      <p className="text-gray-400">{image.dateString}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-200">Venue</h3>
                      <p className="text-gray-400">{image.venue}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Info className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-200">About Event</h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {image.details}
                      </p>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
