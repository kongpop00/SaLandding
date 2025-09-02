import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "บริการทำบัญชีของคุณรวมอะไรบ้าง?",
      answer: "บริการของเรารวม การบันทึกรายรับ-รายจ่าย, จัดทำงบการเงิน, งบกำไรขาดทุน, งบแสดงฐานะการเงิน, ยื่นภาษีเงินได้นิติบุคคล, ภาษีมูลค่าเพิ่ม และให้คำปรึกษาด้านภาษีเพื่อประหยัดต้นทุน"
    },
    {
      question: "ราคาบริการเริ่มต้นที่เท่าไหร่?",
      answer: "ราคาเริ่มต้นที่ 3,000 บาท/เดือน สำหรับบริษัทขนาดเล็กที่มีรายการไม่เกิน 50 รายการต่อเดือน โดยราคาจะขึ้นอยู่กับปริมาณงานและความซับซ้อนของธุรกิจ"
    },
    {
      question: "ต้องส่งเอกสารให้ตรงเวลาไหม?",
      answer: "เราแนะนำให้ส่งเอกสารภายในวันที่ 5 ของเดือนถัดไป เพื่อให้เราสามารถปิดงบและยื่นภาษีได้ทันเวลา หากส่งช้ากว่านี้อาจมีค่าปรับจากกรมสรรพากร"
    },
    {
      question: "บริการจดทะเบียนบริษัทใช้เวลานานแค่ไหน?",
      answer: "การจดทะเบียนบริษัทใช้เวลาประมาณ 7-15 วันทำการ ขึ้นอยู่กับความครบถ้วนของเอกสารและความซับซ้อนของโครงสร้างบริษัท เราจะดำเนินการทุกขั้นตอนให้จนเสร็จ"
    },
    {
      question: "ช่วยวางแผนลดภาษีให้ได้ไหม?",
      answer: "ได้ครับ เราจะวิเคราะห์ฐานะทางการเงินของบริษัทและแนะนำวิธีการลดภาษีอย่างถูกกฎหมาย เช่น การตั้งสำรอง การลงทุนเพื่อลดหย่อนภาษี และการวางแผนกำไรประจำปี"
    },
    {
      question: "มีบริการดูแลหลังจากจดทะเบียนบริษัทไหม?",
      answer: "มีครับ เราจะดูแลตั้งแต่จดทะเบียนบริษัท ทำบัญชีรายเดือน ยื่นงบการเงิน ยื่นภาษี จนถึงการดูแลเรื่องกฎหมายและระเบียบต่างๆ แบบครบวงจร"
    },
    {
      question: "สามารถขอดูตัวอย่างงานได้ไหม?",
      answer: "ได้ครับ เราสามารถแสดงตัวอย่างงบการเงินและรายงานต่างๆ ที่เราจัดทำให้ลูกค้า (โดยปกปิดข้อมูลส่วนตัว) รวมถึงสามารถนัดหมายปรึกษาฟรีเพื่อประเมินความต้องการ"
    },
    {
      question: "ถ้าย้ายมาใช้บริการจากที่อื่น ต้องทำอย่างไร?",
      answer: "เราจะช่วยรับช่วงงานจากสำนักงานบัญชีเดิม โดยตรวจสอบความถูกต้องของงบการเงินย้อนหลัง แก้ไขข้อผิดพลาด (ถ้ามี) และดำเนินการต่อเนื่องให้ครับ"
    }
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
