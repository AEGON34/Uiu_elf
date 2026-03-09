// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const getGridClass = (index) => {
  // A pattern that repeats every 12 items
  const pattern = [
    'md:col-span-2 md:row-span-2', // Large Item
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-2', // Vertical
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1', // Horizontal
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-2', // Another Large
    'md:col-span-1 md:row-span-1',
  ];
  return pattern[index % pattern.length];
};

const GalleryGrid = ({ images, onImageClick }) => {
  // Group images by date (Day Month Year)
  const groupedImages = images.reduce((acc, img) => {
    const key = img.dateString;
    if (!acc[key]) acc[key] = [];
    acc[key].push(img);
    return acc;
  }, {});

  return (
    <div className="space-y-12">
      {Object.entries(groupedImages).map(([date, dateImages]) => (
        <div key={date} className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#ec4622] rounded-full"></span>
              {date}
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{dateImages.length} Photos</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 auto-rows-[150px] md:auto-rows-[200px]">
            {dateImages.map((img, index) => (
              <motion.div
                key={img.id}
                layoutId={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, zIndex: 10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={() => onImageClick(img)}
                className={`relative overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl group bg-gray-100 ${getGridClass(index)}`}
              >
                <img
                  src={img.src}
                  loading="lazy"
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-3">
                    <p className="text-white text-xs font-medium truncate w-full pr-2">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
