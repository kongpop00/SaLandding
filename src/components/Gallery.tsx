import { useState } from 'react';
import { ImageIcon, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      id: 1,
      title: "วางแผนษี",
      description: "บริการบัญชีและภาษีแบบครบวงจร พร้อมยื่นเอกสารทุกประเภท",
      image: "/images/gallery/g1.webp"
    },
    {
      id: 2,
      title: "ตรวจสอบบัญชี",
      description: "บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต (CPA)",
      image: "/images/gallery/g2.webp"
    },
    {
      id: 3,
      title: "วางระบบบัญชี",
      description: "ออกแบบและวางระบบบัญชีให้เหมาะสมกับธุรกิจของคุณ",
      image: "/images/gallery/g3.webp"
    },
    {
      id: 4,
      title: "จดทะเบียนธุรกิจ",
      description: "บริการจดทะเบียนธุรกิจและแก้ไขงานทะเบียนครบวงจร",
      image: "/images/gallery/g4.webp"
    },
    {
      id: 5,
      title: "รับปรึกษาทางวิชาการ",
      description: "ให้คำปรึกษาด้านบัญชี ภาษี และการเงินโดยผู้เชี่ยวชาญ",
      image: "/images/gallery/g5.jpg"
    },
    {
      id: 6,
      title: "รับทำบัญชีครบวงจร",
      description: "บริการบัญชีและภาษีแบบครบวงจร พร้อมยื่นเอกสารทุกประเภท",
      image: "/images/gallery/g6.webp"
    },
    {
      id: 7,
      title: "ช่วยวางแผน CASH FLOW",
      description: "วิเคราะห์วงจรเงินสด ช่วยติดตามบริหารเงินสด และวางแผนสภาพคล่องทางการเงินเพื่อให้ธุรกิจของคุณ มั่นคงทางด้านการเงิน พร้อมที่จะขยายกิจการได้ในอนาคต",
      image: "/images/gallery/g7.webp"
    },
    {
      id: 8,
      title: "เตรียมแผนกู้เงิน",
      description: "เราช่วยจัดเตรียมเอกสาร วางแผนการกู้เงินกับสถาบัน",
      image: "/images/gallery/g8.webp"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentSlide(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <motion.section 
      id="gallery" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-[#f57d21] to-[#f15a29] p-3 rounded-full">
              <ImageIcon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              แกลเลอรี่<span className="text-[#f57d21]">ของเรา</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            รูปภาพกิจกรรม สำนักงาน และบรรยากาศการทำงานของทีมเรา
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`ดูรูปภาพ ${image.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
              aria-describedby="lightbox-description"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[80vh] bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  aria-label="ปิดรูปภาพ"
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      aria-label="รูปก่อนหน้า"
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="รูปถัดไป"
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image */}
                <div className="aspect-video">
                  <img
                    src={galleryImages[currentSlide]?.image}
                    alt={galleryImages[currentSlide]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6 bg-white">
                  <h3 id="lightbox-title" className="text-2xl font-bold text-gray-800 mb-2">
                    {galleryImages[currentSlide]?.title}
                  </h3>
                  <p id="lightbox-description" className="text-gray-600 leading-relaxed">
                    {galleryImages[currentSlide]?.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Gallery;
