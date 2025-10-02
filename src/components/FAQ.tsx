import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [showTikTokIframe, setShowTikTokIframe] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const handleTikTokClick = (index: number) => {
    setShowTikTokIframe(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const faqs = [
    {
      question: "จะลงค่าใช้จ่ายบัญชี ลงอะไรได้บ้าง ที่สรรพากรจะให้ผ่าน",
      answer: "เกี่ยวข้องกับกิจการโดยตรง ,จำเป็นและสมเหตุสมผล , มีหลักฐานเอกสารชัดเจน (ใบเสร็จ, ใบกำกับภาษี, สัญญา ฯลฯ)",
      video: "https://www.tiktok.com/@sasa.accounting/video/7556144947112545537"
    },
    {
      question: "ไม่รู้ว่าต้องยื่นภาษี สรรพากรจะว่ายังไงถ้าคุณพูดคำนี้",
      answer: "ความไม่รู้กฎหมาย ไม่ใช่ข้อแก้ตัว (หลักกฎหมายทั่วไป) ,การไม่ยื่นภาษี = มีโทษทั้ง เงินเพิ่ม (ดอกเบี้ย) และ เบี้ยปรับ (ค่าปรับทางอาญา) ขึ้นอยู่กับกรณี",
      video: "https://www.tiktok.com/@sasa.accounting/video/7555362273259212052"

    },
     {
      question: "มีรายได้จากออนไลน์ แต่ไม่ได้ยื่นภาษี เสี่ยงไหม ?",
      answer: "มีรายได้จากออนไลน์ แต่ไม่ยื่นภาษี = เสี่ยงแน่นอน เพราะกฎหมายไทยถือว่า รายได้ทุกประเภทต้องนำมาคำนวณภาษีเงินได้บุคคลธรรมดา/นิติบุคคล ไม่ว่าจะเป็นเงินเดือน ธุรกิจ ค่าบริการ ขายของออนไลน์ หรือรายได้จากแพลตฟอร์มต่างประเทศ",
      video: "https://www.tiktok.com/@sasa.accounting/video/7554627763186060565"

    },
      {
      question: "รายได้ถึง 1.8 แต่ยังไม่จด vat จะเป็นยังไงนะ ?",
      answer: "ถ้าเพิ่งเกิน → รีบไปจด VAT เลย จะได้ไม่โดนย้อนหลัง ถ้าเกินมานาน → สามารถไป ขอยื่นย้อนหลังเอง เพื่อลดโทษปรับและเงินเพิ่ม",
      video: "https://www.tiktok.com/@sasa.accounting/video/7554230620352793876"

    },
      {
      question: "สิ่งที่สำนักงานบัญชีอยากแนะนำนักเจ้าของธุรกิจ",
      answer: "ไม่รอจนใกล้ปิดงบหรือโดนตรวจสอบ ใช้บริการสำนักงานบัญชีช่วยวางระบบและให้คำแนะนำ เพื่อ ลดความเสี่ยงผิดพลาดและโดนปรับย้อนหลัง",
      video: "https://www.tiktok.com/@sasa.accounting/video/7553530146326695189"

    },
        {
      question: "จดบริษัทเสียภาษีถูกลงจริงไหม ?",
      answer: "จดบริษัท = อาจเสียภาษีถูกลง ถ้าธุรกิจมีรายได้สูง หรือวางแผนค่าใช้จ่าย-เงินเดือนให้เหมาะสม จดบริษัท = อาจเสียเพิ่ม ถ้าธุรกิจเล็ก รายได้น้อย เพราะต้องจ่ายค่าบริหารจัดการบัญชีและเอกสารมากขึ้น",
      video: "https://www.tiktok.com/@sasa.accounting/video/7553189261659475208"

    },
   
  ];

  return (
    <motion.section 
      id="faq" 
      className="py-20 bg-white"
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
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              คำถาม<span className="text-[#f57d21]">ที่พบบ่อย</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            คำตอบสำหรับคำถามที่ลูกค้าถามบ่อยเกี่ยวกับบริการของเรา
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-6 h-6 text-[#f57d21]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#f57d21]" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                          {faq.video && (
                            <div className="mt-4">
                              <div className="bg-gray-100 rounded-lg p-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                                  <svg className="w-4 h-4 mr-2 text-[#f57d21]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l4.419 2.299c.537.28 1.181-.199 1.181-.814V10.515c0-.615-.644-1.094-1.181-.814L9 12z"/>
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z" clipRule="evenodd"/>
                                  </svg>
                                  ดูวิดีโอเพิ่มเติม
                                </h4>
                                <div className="space-y-3">
                                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                                    <p className="text-xs text-gray-500 mb-2">TikTok Video</p>
                                    <div className="w-full">
                                      {/* TikTok Wrapper */}
                                      <div className="tiktok-wrapper" style={{ position: 'relative', maxWidth: '720px' }}>
                                        {/* TikTok Container - แสดงทันทีเมื่อเปิด FAQ */}
                                        <div className="tiktok-container">
                                          <iframe
                                            src={`https://www.tiktok.com/embed/v2/${faq.video.split('/').pop()}?autoplay=0&controls=1`}
                                            width="100%"
                                            height="600"
                                            frameBorder="0"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                            title="TikTok Video"
                                            style={{ borderRadius: '12px' }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-3">{faq.answer}</p>
                                  </div>
                                  <a 
                                    href={faq.video}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#f57d21] to-[#f15a29] text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium"
                                  >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-8v20h8v-.44a4.83 4.83 0 0 1 3.77-4.25A4.83 4.83 0 0 1 24 12a4.83 4.83 0 0 1-4.41-5.31Z"/>
                                    </svg>
                                    เปิดดู TikTok เต็มหน้าจอ
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
   
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
