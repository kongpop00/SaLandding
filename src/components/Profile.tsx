import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Phone, MapPin, Award, Users, Calendar, Building } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('company');

  const handleDownloadProfile = () => {
    // Create a simple PDF-like content for download
    const profileData = {
      companyName: "บริษัท บัญชีครบวงจร จำกัด",
      established: "2008",
      employees: "50+",
      clients: "500+",
      services: ["จดทะเบียนบริษัท", "ทำบัญชี", "ยื่นงบการเงิน", "ยื่นภาษี", "ตรวจสอบบัญชี"],
      contact: {
        email: "info@accounting-complete.com",
        phone: "02-123-4567",
        address: "123 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500"
      }
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profileData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "company-profile.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-[#f57d21] transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>กลับ</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-800">โปรไฟล์บริษัท</h1>
            <button
              onClick={handleDownloadProfile}
              className="flex items-center space-x-2 bg-[#f57d21] text-white px-4 py-2 rounded-lg hover:bg-[#f15a29] transition-colors duration-200"
            >
              <Download className="w-5 h-5" />
              <span>ดาวโหลด</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Company Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-[#f57d21] to-[#f15a29] rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">บริษัท บัญชีครบวงจร จำกัด</h2>
              <p className="text-xl text-gray-600 mb-6">ผู้เชี่ยวชาญด้านบัญชีและภาษีอากร</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>ก่อตั้งปี 2008</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>พนักงาน 50+ คน</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>ลูกค้า 500+ ราย</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('company')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'company'
                      ? 'border-b-2 border-[#f57d21] text-[#f57d21]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  ข้อมูลบริษัท
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'services'
                      ? 'border-b-2 border-[#f57d21] text-[#f57d21]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  บริการ
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'contact'
                      ? 'border-b-2 border-[#f57d21] text-[#f57d21]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  ติดต่อ
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'company' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">เกี่ยวกับเรา</h3>
                  <p className="text-gray-600 leading-relaxed">
                    บริษัท บัญชีครบวงจร จำกัด เป็นผู้ให้บริการด้านบัญชีและภาษีอากรที่มีประสบการณ์มากกว่า 15 ปี 
                    เราให้บริการครบวงจรตั้งแต่การจดทะเบียนบริษัท การทำบัญชี การยื่นงบการเงิน และการยื่นภาษีอากร
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">วิสัยทัศน์</h4>
                      <p className="text-gray-600">
                        เป็นผู้นำด้านบริการบัญชีและภาษีอากรที่เชื่อถือได้ โดยมุ่งเน้นการให้บริการที่มีคุณภาพสูงสุด
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-3">พันธกิจ</h4>
                      <p className="text-gray-600">
                        ให้บริการด้านบัญชีและภาษีอากรที่ครบวงจร ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'services' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">บริการของเรา</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "จดทะเบียนบริษัท", desc: "บริการจดทะเบียนบริษัทครบวงจร รวดเร็ว ถูกต้องตามกฎหมาย" },
                      { title: "ทำบัญชี", desc: "บริการทำบัญชีรายเดือน ถูกต้องตามมาตรฐานการบัญชี" },
                      { title: "ยื่นงบการเงิน", desc: "จัดทำและยื่นงบการเงินต่อกรมพัฒนาธุรกิจการค้า" },
                      { title: "ยื่นภาษีอากร", desc: "บริการยื่นภาษีเงินได้นิติบุคคลและภาษีมูลค่าเพิ่ม" },
                      { title: "ตรวจสอบบัญชี", desc: "บริการตรวจสอบบัญชีโดยผู้สอบบัญชีรับอนุญาต" },
                      { title: "ที่ปรึกษาภาษี", desc: "ให้คำปรึกษาด้านภาษีอากรและการวางแผนภาษี" }
                    ].map((service, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{service.title}</h4>
                        <p className="text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">ติดต่อเรา</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-[#f57d21] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">อีเมล</h4>
                          <p className="text-gray-600">info@accounting-complete.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-[#f57d21] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">โทรศัพท์</h4>
                          <p className="text-gray-600">02-123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-[#f57d21] mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">ที่อยู่</h4>
                          <p className="text-gray-600">
                            123 ถนนสีลม แขวงสีลม<br />
                            เขตบางรัก กรุงเทพฯ 10500
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-4">เวลาทำการ</h4>
                      <div className="space-y-2 text-gray-600">
                        <p>จันทร์ - ศุกร์: 08:30 - 17:30</p>
                        <p>เสาร์: 09:00 - 12:00</p>
                        <p>อาทิตย์: ปิด</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;